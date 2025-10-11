"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import * as safeStorage from "@/lib/safe-storage"

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

const IconCheck = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

export default function AgregarHuertaPage() {
  const [mounted, setMounted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    plant: "",
    location: "",
    plantingDate: "",
    notes: "",
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.name || !formData.plant) {
      alert("Por favor completa los campos obligatorios")
      return
    }

    if (!mounted) {
      console.warn("[v0] Component not mounted yet")
      return
    }

    try {
      const stored = safeStorage.getItem("verticalia-huertas")
      const huertas = stored ? JSON.parse(stored) : []

      const newHuerta = {
        id: huertas.length > 0 ? Math.max(...huertas.map((h) => h.id)) + 1 : 1,
        name: formData.name,
        plant: formData.plant,
        location: formData.location,
        plantingDate: formData.plantingDate,
        notes: formData.notes,
        nextWater: "5 días",
        status: "good",
      }

      const updated = [...huertas, newHuerta]
      safeStorage.setItem("verticalia-huertas", JSON.stringify(updated))

      console.log("Nueva huerta guardada:", newHuerta)
      if (typeof window !== "undefined") {
        window.location.href = "/"
      }
    } catch (err) {
      console.error("Error al guardar huerta:", err)
      alert("Ocurrió un error guardando la huerta. Revisá la consola.")
    }
  }

  const handleBack = () => {
    if (typeof window !== "undefined") {
      window.location.href = "/"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-teal-300/15 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-emerald-300/10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        <div className="bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-500 px-5 py-4 shadow-lg">
          <div className="flex items-center gap-3">
            <button
              onClick={handleBack}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-all active:scale-95 backdrop-blur-sm"
              aria-label="Volver"
              type="button"
            >
              <IconArrowLeft className="text-white" />
            </button>
            <div className="flex items-center gap-2 flex-1">
              <IconLeaf className="text-white w-5 h-5" />
              <h1 className="text-lg font-bold text-white">Nueva Huerta</h1>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="p-5 pb-24">
            <div className="space-y-6">
              <div className="space-y-3">
                <label className="text-sm font-semibold text-gray-700 flex items-center gap-1">
                  Tipo de planta
                  <span className="text-red-500">*</span>
                </label>

                <div className="relative -mx-5">
                  <div className="overflow-x-auto px-5 pb-3">
                    <div className="flex gap-4 min-w-max py-2">
                      {[
                        {
                          name: "Papa",
                          image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=200&h=200&fit=crop",
                          color: "ring-amber-400",
                        },
                        {
                          name: "Lechuga",
                          image: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=200&h=200&fit=crop",
                          color: "ring-green-400",
                        },
                        {
                          name: "Zanahoria",
                          image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=200&h=200&fit=crop",
                          color: "ring-orange-400",
                        },
                        {
                          name: "Cebolla",
                          image: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=200&h=200&fit=crop",
                          color: "ring-purple-400",
                        },
                        {
                          name: "Tomate",
                          image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=200&h=200&fit=crop",
                          color: "ring-red-400",
                        },
                        {
                          name: "Pimiento",
                          image: "https://images.unsplash.com/photo-1525607551316-4a8e16d1f9ba?w=200&h=200&fit=crop",
                          color: "ring-lime-400",
                        },
                        {
                          name: "Espinaca",
                          image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=200&h=200&fit=crop",
                          color: "ring-emerald-400",
                        },
                        {
                          name: "Rábano",
                          image: "https://images.unsplash.com/photo-1631292784640-2b24be784d5d?w=200&h=200&fit=crop",
                          color: "ring-rose-400",
                        },
                        {
                          name: "Pepino",
                          image: "https://images.unsplash.com/photo-1604977042946-2b24be784d5d?w=200&h=200&fit=crop",
                          color: "ring-green-400",
                        },
                        {
                          name: "Calabacín",
                          image: "https://images.unsplash.com/photo-1579113800032-c38bd7635818?w=200&h=200&fit=crop",
                          color: "ring-lime-400",
                        },
                        {
                          name: "Brócoli",
                          image: "https://images.unsplash.com/photo-1628773822503-930a7eaecf80?w=200&h=200&fit=crop",
                          color: "ring-green-400",
                        },
                        {
                          name: "Coliflor",
                          image: "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?w=200&h=200&fit=crop",
                          color: "ring-gray-400",
                        },
                        {
                          name: "Repollo",
                          image: "https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?w=200&h=200&fit=crop",
                          color: "ring-green-400",
                        },
                        {
                          name: "Acelga",
                          image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=200&h=200&fit=crop",
                          color: "ring-teal-400",
                        },
                      ].map((plant) => (
                        <motion.button
                          key={plant.name}
                          type="button"
                          onClick={() => setFormData({ ...formData, plant: plant.name })}
                          className={`relative flex flex-col items-center gap-3 transition-all ${
                            formData.plant === plant.name ? "scale-105" : "scale-100 hover:scale-102"
                          }`}
                          whileTap={{ scale: 0.95 }}
                        >
                          <div className="relative">
                            <div
                              className={`w-24 h-24 rounded-2xl overflow-hidden shadow-md transition-all ${
                                formData.plant === plant.name
                                  ? `ring-4 ${plant.color} shadow-lg`
                                  : "ring-2 ring-gray-200 hover:ring-gray-300"
                              }`}
                            >
                              <img
                                src={plant.image || "/placeholder.svg"}
                                alt={plant.name}
                                className="w-full h-full object-cover"
                              />
                              <div
                                className={`absolute inset-0 transition-opacity ${
                                  formData.plant === plant.name ? "bg-emerald-500/10" : "bg-black/5 hover:bg-black/0"
                                }`}
                              />
                            </div>
                            {formData.plant === plant.name && (
                              <motion.div
                                layoutId="selected-indicator"
                                className="absolute -top-2 -right-2 w-7 h-7 bg-emerald-500 rounded-full flex items-center justify-center shadow-lg ring-4 ring-white"
                                initial={false}
                                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                              >
                                <IconCheck className="w-4 h-4 text-white" />
                              </motion.div>
                            )}
                          </div>
                          <span
                            className={`text-sm font-semibold transition-colors ${
                              formData.plant === plant.name ? "text-emerald-700" : "text-gray-700"
                            }`}
                          >
                            {plant.name}
                          </span>
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-1 pb-1">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                    ))}
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-gray-700 flex items-center gap-1">
                    Nombre de la huerta
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Ej: Huerta F"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all text-gray-800 placeholder:text-gray-400"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="location" className="text-sm font-semibold text-gray-700">
                    Ubicación/Sección
                  </label>
                  <input
                    id="location"
                    type="text"
                    placeholder="Ej: Sección A, Nivel 2"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all text-gray-800 placeholder:text-gray-400"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="plantingDate" className="text-sm font-semibold text-gray-700">
                    Fecha de plantación
                  </label>
                  <input
                    id="plantingDate"
                    type="date"
                    value={formData.plantingDate}
                    onChange={(e) => setFormData({ ...formData, plantingDate: e.target.value })}
                    className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all text-gray-800"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="notes" className="text-sm font-semibold text-gray-700">
                    Notas adicionales
                  </label>
                  <textarea
                    id="notes"
                    placeholder="Observaciones, cuidados especiales, etc."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-xl focus:border-emerald-500 focus:ring-4 focus:ring-emerald-100 outline-none transition-all text-gray-800 placeholder:text-gray-400 min-h-[120px] resize-none"
                  />
                </div>

                <div className="sticky bottom-0 bg-white border-t border-gray-200 p-5 shadow-lg">
                  <div className="flex flex-col gap-3">
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold py-3.5 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all active:scale-[0.98]"
                    >
                      Crear Huerta
                    </button>
                    <button
                      type="button"
                      onClick={handleBack}
                      className="w-full bg-white border-2 border-gray-200 text-gray-700 font-semibold py-3.5 px-6 rounded-xl hover:bg-gray-50 transition-all active:scale-[0.98]"
                    >
                      Cancelar
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
