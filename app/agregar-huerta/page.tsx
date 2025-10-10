"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const IconArrowLeft = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const IconLeaf = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5 20c8 0 14-6 14-14 0-1-.1-2-.3-3-5.7.4-10.4 3.2-12.9 7.7A9.99 9.99 0 005 20z"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default function AgregarHuertaPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    plant: "",
    location: "",
    plantingDate: "",
    notes: "",
  })

  const plantOptions = [
    { name: "Papa", image: "/potato-plant-vegetable.jpg" },
    { name: "Lechuga", image: "/lettuce-green-leafy-vegetable.jpg" },
    { name: "Zanahoria", image: "/carrot-orange-vegetable.jpg" },
    { name: "Cebolla", image: "/onion-bulb-vegetable.jpg" },
    { name: "Tomate", image: "/tomato-red-vegetable.jpg" },
    { name: "Pimiento", image: "/bell-pepper-vegetable.jpg" },
    { name: "Espinaca", image: "/spinach-green-leafy-vegetable.jpg" },
    { name: "Rábano", image: "/radish-red-vegetable.jpg" },
    { name: "Pepino", image: "/cucumber-green-vegetable.jpg" },
    { name: "Calabacín", image: "/zucchini-green-vegetable.jpg" },
    { name: "Berenjena", image: "/eggplant-purple-vegetable.jpg" },
    { name: "Brócoli", image: "/broccoli-green-vegetable.jpg" },
    { name: "Coliflor", image: "/cauliflower-white-vegetable.jpg" },
    { name: "Repollo", image: "/cabbage-green-vegetable.jpg" },
    { name: "Acelga", image: "/chard-leafy-green-vegetable.jpg" },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.plant) {
      alert("Por favor completa los campos obligatorios")
      return
    }

    // Get existing huertas from localStorage
    const stored = localStorage.getItem("verticalia-huertas")
    const huertas = stored ? JSON.parse(stored) : []

    // Create new huerta
    const newHuerta = {
      id: huertas.length > 0 ? Math.max(...huertas.map((h: any) => h.id)) + 1 : 1,
      name: formData.name,
      plant: formData.plant,
      location: formData.location,
      plantingDate: formData.plantingDate,
      notes: formData.notes,
      nextWater: "5 días",
    }

    // Save to localStorage
    localStorage.setItem("verticalia-huertas", JSON.stringify([...huertas, newHuerta]))

    // Navigate back to dashboard
    router.push("/")
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-emerald-50 relative overflow-hidden">
      {/* Background decoration */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none blur-sm opacity-80"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 800 1200"
        aria-hidden
      >
        <defs>
          <linearGradient id="g1" x1="0" x2="1">
            <stop offset="0%" stopColor="#ECFDF5" />
            <stop offset="100%" stopColor="#DBFADF" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#g1)" />
        <g transform="translate(-80, -40)" opacity="0.25">
          <polygon points="100,50 220,250 -20,250" fill="#10B981" />
          <polygon points="300,200 420,400 180,400" fill="#34D399" />
          <polygon points="520,60 680,260 420,260" fill="#059669" />
          <polygon points="640,420 760,620 520,620" fill="#16A34A" />
          <polygon points="200,540 340,760 80,760" fill="#86EFAC" />
        </g>
      </svg>

      {/* Mobile-style container */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-xs bg-white rounded-2xl shadow-xl p-6 relative z-10"
      >
        {/* Header with back button */}
        <div className="flex items-center gap-3 mb-6">
          <button
            onClick={() => router.push("/")}
            className="p-2 hover:bg-emerald-50 rounded-lg transition-colors"
            aria-label="Volver"
          >
            <IconArrowLeft className="text-emerald-700" />
          </button>
          <div className="flex items-center gap-2 flex-1">
            <IconLeaf className="text-emerald-600" />
            <h1 className="text-lg font-bold text-emerald-800">Nueva Huerta</h1>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-3 -mx-6 px-6 pb-4 border-b border-emerald-100">
            <Label className="text-sm font-medium text-gray-700">
              Tipo de planta <span className="text-red-500">*</span>
            </Label>
            <div className="relative -mx-6">
              {/* Gradient overlays for scroll indication */}
              <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
              <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

              {/* Scrollable carousel */}
              <div className="overflow-x-auto scrollbar-hide px-6 pb-2">
                <div className="flex gap-3 min-w-max">
                  {plantOptions.map((plant) => (
                    <motion.button
                      key={plant.name}
                      type="button"
                      onClick={() => setFormData({ ...formData, plant: plant.name })}
                      className={`flex flex-col items-center gap-2 p-3 rounded-xl transition-all ${
                        formData.plant === plant.name
                          ? "bg-emerald-50 ring-2 ring-emerald-500 shadow-md"
                          : "bg-gray-50 hover:bg-emerald-50/50"
                      }`}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div
                        className={`w-20 h-20 rounded-full overflow-hidden border-2 transition-all ${
                          formData.plant === plant.name ? "border-emerald-500 shadow-lg" : "border-gray-200"
                        }`}
                      >
                        <img
                          src={plant.image || "/placeholder.svg"}
                          alt={plant.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span
                        className={`text-xs font-medium transition-colors ${
                          formData.plant === plant.name ? "text-emerald-700" : "text-gray-600"
                        }`}
                      >
                        {plant.name}
                      </span>
                      {formData.plant === plant.name && (
                        <motion.div
                          layoutId="selected-indicator"
                          className="w-1.5 h-1.5 rounded-full bg-emerald-500"
                          initial={false}
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium text-gray-700">
              Nombre de la huerta <span className="text-red-500">*</span>
            </Label>
            <Input
              id="name"
              placeholder="Ej: Huerta F"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="border-emerald-200 focus:border-emerald-500 focus:ring-emerald-500"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="location" className="text-sm font-medium text-gray-700">
              Ubicación/Sección
            </Label>
            <Input
              id="location"
              placeholder="Ej: Sección A, Nivel 2"
              value={formData.location}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              className="border-emerald-200 focus:border-emerald-500 focus:ring-emerald-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="plantingDate" className="text-sm font-medium text-gray-700">
              Fecha de plantación
            </Label>
            <Input
              id="plantingDate"
              type="date"
              value={formData.plantingDate}
              onChange={(e) => setFormData({ ...formData, plantingDate: e.target.value })}
              className="border-emerald-200 focus:border-emerald-500 focus:ring-emerald-500"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes" className="text-sm font-medium text-gray-700">
              Notas adicionales
            </Label>
            <Textarea
              id="notes"
              placeholder="Observaciones, cuidados especiales, etc."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="border-emerald-200 focus:border-emerald-500 focus:ring-emerald-500 min-h-[100px] resize-none"
            />
          </div>

          {/* Action buttons */}
          <div className="flex flex-col gap-3 pt-4">
            <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white h-11 text-base">
              Crear Huerta
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => router.push("/")}
              className="w-full border-emerald-200 text-emerald-700 hover:bg-emerald-50 h-11 text-base"
            >
              Cancelar
            </Button>
          </div>
        </form>
      </motion.div>
    </div>
  )
}
