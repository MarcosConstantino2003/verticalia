"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import * as safeStorage from "@/lib/safe-storage"

/* ---------- Icons (copiados tal cual) ---------- */
const IconWater = ({ className = "w-6 h-6" }: any) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3s5 5.5 5 9a5 5 0 11-10 0c0-3.5 5-9 5-9z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
const IconLeaf = ({ className = "w-5 h-5" }: any) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 20c8 0 14-6 14-14 0-1-.1-2-.3-3-5.7.4-10.4 3.2-12.9 7.7A9.99 9.99 0 005 20z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
const IconThermometer = ({ className = "w-5 h-5" }: any) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="11" y="2" width="2" height="12" rx="1" stroke="currentColor" strokeWidth="1.4" />
    <path d="M12 18a3 3 0 100-6 3 3 0 000 6z" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
const IconSun = ({ className = "w-5 h-5" }: any) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.4" />
    <path d="M12 2v1M12 21v1M4.2 4.2l.7.7M19.1 19.1l.7.7M2 12h1M21 12h1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
  </svg>
)
const IconArrowLeft = ({ className = "w-5 h-5" }: any) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
const IconCalendar = ({ className = "w-5 h-5" }: any) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)
const IconSprout = ({ className = "w-5 h-5" }: any) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 20v-8a4 4 0 014-4 4 4 0 014 4v8M7 12a4 4 0 014-4 4 4 0 014 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
const IconBook = ({ className = "w-5 h-5" }: any) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 19.5A2.5 2.5 0 016.5 17H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
const IconClose = ({ className = "w-6 h-6" }: any) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
const IconAlert = ({ className = "w-5 h-5" }: any) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)
const IconStar = ({ className = "w-5 h-5" }: any) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

/* ---------- Gauge ---------- */
function CircularGauge({ percent = 50, size = 100, stroke = 8, color = "#34D399", label = "", valueLabel = "", Icon = null }: any) {
  const r = (size - stroke) / 2
  const circumference = 2 * Math.PI * r
  const offset = circumference * (1 - percent / 100)
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative inline-flex">
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          <circle cx={size / 2} cy={size / 2} r={r} stroke="#f0fdf4" strokeWidth={stroke} fill="none" />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            stroke={color}
            strokeWidth={stroke}
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={offset}
            strokeLinecap="round"
            fill="none"
            transform={`rotate(-90 ${size / 2} ${size / 2})`}
            style={{ transition: "stroke-dashoffset 0.6s ease" }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-sm">
          {Icon ? <div className="mb-1 text-gray-700/90">{Icon({ className: "w-5 h-5" })}</div> : null}
          <div className="font-bold text-sm text-gray-800">{valueLabel}</div>
        </div>
      </div>
      <div className="text-xs font-medium text-gray-600 text-center">{label}</div>
    </div>
  )
}

/* ---------- Care guides fallback ---------- */
const careGuides: Record<string, any> = {
  Papa: {
    watering: "Regar profundamente 2-3 veces por semana. El suelo debe mantenerse húmedo pero no encharcado. Aumentar la frecuencia durante la formación de tubérculos.",
    sunlight: "Requiere 6-8 horas de luz solar directa al día. Tolera sombra parcial pero reduce el rendimiento.",
    temperature: "Temperatura óptima entre 15-20°C. Evitar temperaturas superiores a 30°C.",
    fertilization: "Aplicar fertilizante rico en potasio cada 3-4 semanas.",
    commonProblems: "Tizón tardío, escarabajo de la papa, pudrición por exceso de humedad.",
    tips: "Aporcar los tallos cada 2-3 semanas.",
  },
  Lechuga: {
    watering: "Regar frecuentemente manteniendo el suelo constantemente húmedo.",
    sunlight: "4-6 horas de luz solar.",
    temperature: "Crece mejor entre 15-20°C.",
    fertilization: "Fertilizante balanceado cada 2 semanas.",
    commonProblems: "Pulgones, babosas, pudrición de raíz.",
    tips: "Cosechar en las mañanas.",
  },
}

/* ---------- Fallback gardenData (por si storage vacío) ---------- */
const fallbackGardens: Record<string, any> = {
  "1": {
    id: "1",
    name: "Huerta A",
    plant: "Papa",
    plantedDate: "15 Ene 2025",
    harvestDate: "15 Abr 2025",
    nextWater: "2 días",
    waterLevel: 65,
    humidity: 48,
    temperature: 22,
    light: 80,
    status: "Saludable",
    notes: "Crecimiento óptimo. Mantener riego regular.",
    waterHistory: [{ date: "10 Feb", amount: "2.5L" }],
  },
  "2": {
    id: "2",
    name: "Huerta B",
    plant: "Papa",
    plantedDate: "20 Ene 2025",
    harvestDate: "20 Abr 2025",
    nextWater: "3 días",
    waterLevel: 55,
    humidity: 44,
    temperature: 21,
    light: 78,
    status: "Saludable",
    notes: "Revisar plagas semanalmente.",
    waterHistory: [{ date: "09 Feb", amount: "2.6L" }],
  },
  "3": {
    id: "3",
    name: "Huerta C",
    plant: "Lechuga",
    plantedDate: "01 Feb 2025",
    harvestDate: "15 Mar 2025",
    nextWater: "1 día",
    waterLevel: 45,
    humidity: 52,
    temperature: 18,
    light: 60,
    status: "Saludable",
    notes: "Nivel de agua bajo. Regar pronto.",
    waterHistory: [{ date: "11 Feb", amount: "1.8L" }],
  },
}

/* ---------- Component ---------- */
export default function HuertaDetailPage() {
  const params = useParams()
  const id = params?.id ?? null

  const [loading, setLoading] = useState(true)
  const [showCareGuide, setShowCareGuide] = useState(false)

  // garden may be null while loading or if id not found
  const [garden, setGarden] = useState<any | null>(null)

  // irrigation simulation state
  const [isPumping, setIsPumping] = useState(false)
  const [progress, setProgress] = useState(0)
  const [resultState, setResultState] = useState<null | "success" | "error">(null)
  const [toastVisible, setToastVisible] = useState(false)
  const [undoToken, setUndoToken] = useState<string | null>(null)

  // Load garden from safe storage or fallback when id changes
  useEffect(() => {
    setLoading(true)
    try {
      const stored = safeStorage.getItem("verticalia-huertas")
      if (stored) {
        try {
          const huertas = JSON.parse(stored) // expect array of { id, name, ... }
          const found = Array.isArray(huertas) ? huertas.find((h: any) => String(h.id) === String(id)) : null
          if (found) {
            // normalize structure to match our UI fields
            const gardenInfo = {
              id: String(found.id),
              name: found.name || `Huerta ${found.id}`,
              plant: found.plant || "Papa",
              plantedDate: found.plantingDate || found.plantedDate || "Reciente",
              harvestDate: found.harvestDate || "Por determinar",
              nextWater: found.nextWater || "3 días",
              waterLevel: typeof found.waterLevel === "number" ? found.waterLevel : 50,
              humidity: typeof found.humidity === "number" ? found.humidity : 45,
              temperature: typeof found.temperature === "number" ? found.temperature : 20,
              light: typeof found.light === "number" ? found.light : 70,
              status: found.status || "Saludable",
              notes: found.notes || "Huerta guardada en local.",
              waterHistory: found.waterHistory || [{ date: "Hoy", amount: "2.0L" }],
            }
            setGarden(gardenInfo)
            setLoading(false)
            return
          }
        } catch (e) {
          console.warn("[v0] error parsing verticalia-huertas", e)
        }
      }

      // fallback: try fallbackGardens by id
      if (id && fallbackGardens[id]) {
        setGarden(fallbackGardens[id])
      } else {
        // pick a default if id missing
        setGarden(fallbackGardens["1"])
      }
    } catch (e) {
      console.warn("[v0] error loading garden", e)
      setGarden(fallbackGardens["1"])
    } finally {
      setLoading(false)
    }
  }, [id])

  // helper to persist changes back to storage (optional: keeps history)
  const persistGardenToStorage = (updatedGarden: any) => {
    try {
      const stored = safeStorage.getItem("verticalia-huertas")
      if (!stored) return
      const huertas = JSON.parse(stored)
      if (!Array.isArray(huertas)) return
      const idx = huertas.findIndex((h: any) => String(h.id) === String(updatedGarden.id))
      if (idx >= 0) {
        huertas[idx] = { ...huertas[idx], ...updatedGarden }
        safeStorage.setItem("verticalia-huertas", JSON.stringify(huertas))
      }
    } catch (e) {
      // no-op, es solo una persistencia opcional
      console.warn("[v0] persistGardenToStorage failed", e)
    }
  }

  /* ---------- irrigation simulation (same UX profesional) ---------- */
  const simulateIrrigation = () => {
    if (!garden || isPumping) return
    setIsPumping(true)
    setProgress(0)
    setResultState(null)
    setToastVisible(true)

    const totalDuration = 2200 + Math.floor(Math.random() * 1200)
    const stepMs = 80
    const steps = Math.ceil(totalDuration / stepMs)
    let currentStep = 0

    const waterGain = 12 + Math.floor(Math.random() * 17)
    const initialWater = garden.waterLevel
    const targetWater = Math.min(100, initialWater + waterGain)
    const willFail = Math.random() < 0.07

    const interval = setInterval(() => {
      currentStep++
      const newProgress = Math.min(100, Math.round((currentStep / steps) * 100))
      setProgress(newProgress)

      const interpolatedWater = Math.round(initialWater + (targetWater - initialWater) * (newProgress / 100))
      setGarden((g: any) => ({ ...g, waterLevel: interpolatedWater }))

      if (currentStep >= steps) {
        clearInterval(interval)
        setTimeout(() => {
          setIsPumping(false)
          if (willFail) {
            setResultState("error")
            setGarden((g: any) => ({ ...g, waterLevel: Math.max(0, initialWater + Math.round((targetWater - initialWater) * 0.35)) }))
          } else {
            setResultState("success")
            const now = new Date()
            const dateLabel = now.toLocaleDateString("es-AR", { day: "2-digit", month: "short" })
            const addedAmount = `${Math.round((targetWater - initialWater) / 3 + 1)}L`
            setGarden((g: any) => {
              const newHistory = [{ date: dateLabel, amount: addedAmount }, ...(g.waterHistory || [])].slice(0, 8)
              const nextWater = targetWater > 85 ? "5 días" : targetWater > 60 ? "3 días" : "2 días"
              const updated = { ...g, waterLevel: targetWater, waterHistory: newHistory, nextWater }
              // Optionally persist to storage
              persistGardenToStorage(updated)
              return updated
            })
            setUndoToken(`undo-${Date.now()}`)
          }
          setTimeout(() => setToastVisible(false), 2100)
        }, 350)
      }
    }, stepMs)
  }

  const handleUndo = () => {
    if (!garden || !undoToken) return
    setGarden((g: any) => {
      const [, ...rest] = g.waterHistory || []
      const newWater = Math.max(0, g.waterLevel - 12)
      const updated = { ...g, waterHistory: rest, waterLevel: newWater, nextWater: "2 días" }
      persistGardenToStorage(updated)
      return updated
    })
    setUndoToken(null)
    setToastVisible(true)
    setResultState("success")
    setTimeout(() => setToastVisible(false), 1600)
  }

  const handleBack = () => (window.location.href = "/")

  const statusColor =
    garden?.status === "Excelente" ? "text-green-600 bg-green-100" : garden?.status === "Saludable" ? "text-emerald-600 bg-emerald-100" : "text-orange-600 bg-orange-100"

  const careGuide = garden ? careGuides[garden.plant] || careGuides.Papa : careGuides.Papa

  if (loading) {
    return (
      <div className="min-h-screen bg-emerald-50 flex items-center justify-center">
        <div className="text-emerald-700 font-medium">Cargando huerta…</div>
      </div>
    )
  }

  if (!garden) {
    return (
      <div className="min-h-screen bg-emerald-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl p-6 shadow-lg max-w-sm text-center">
          <h2 className="text-lg font-bold text-gray-800 mb-2">Huerta no encontrada</h2>
          <p className="text-gray-600 mb-4">No se pudo encontrar la información de esta huerta.</p>
          <button onClick={handleBack} className="bg-emerald-600 text-white px-4 py-2 rounded-lg">
            Volver
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
      {/* background decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-teal-300/15 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* header */}
        <div className="bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-500 px-5 py-4 shadow-lg">
          <div className="flex items-center gap-3">
            <button onClick={handleBack} className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-all active:scale-95 backdrop-blur-sm" aria-label="Volver">
              <IconArrowLeft className="text-white" />
            </button>
            <div className="flex-1">
              <h1 className="text-lg font-bold text-white">{garden.name}</h1>
              <p className="text-sm text-white/90">{garden.plant}</p>
            </div>
            <div className={`px-3 py-1.5 rounded-full text-xs font-bold ${statusColor}`}>{garden.status}</div>
          </div>
        </div>

        {/* content */}
        <div className="flex-1 overflow-y-auto pb-24">
          <div className="p-5 space-y-4">
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="relative overflow-hidden bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl p-5 shadow-lg">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
              <div className="relative flex items-center justify-between gap-4">
                <div>
                  <div className="text-white/90 text-xs font-medium mb-1">Próximo riego</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-white font-bold text-3xl">{String(garden.nextWater).split(" ")[0]}</span>
                    <span className="text-white/90 text-sm">{String(garden.nextWater).split(" ")[1]}</span>
                  </div>
                  <div className="text-white/70 text-xs mt-1">Estimado</div>
                </div>
                <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl">
                  <IconWater className="w-8 h-8 text-white" />
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="bg-white rounded-2xl p-4 shadow-sm">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-emerald-50 rounded-xl">
                    <IconCalendar className="w-5 h-5 text-emerald-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-medium">Plantado</div>
                    <div className="text-sm font-bold text-gray-800">{garden.plantedDate}</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-amber-50 rounded-xl">
                    <IconSprout className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500 font-medium">Cosecha est.</div>
                    <div className="text-sm font-bold text-gray-800">{garden.harvestDate}</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} className="bg-white rounded-2xl p-5 shadow-sm">
              <h2 className="text-base font-bold text-gray-800 mb-4">Métricas actuales</h2>
              <div className="grid grid-cols-2 gap-4">
                <CircularGauge percent={garden.waterLevel} size={100} stroke={8} color="#06b6d4" label="Nivel de agua" valueLabel={`${garden.waterLevel}%`} Icon={IconWater} />
                <CircularGauge percent={garden.humidity} size={100} stroke={8} color="#10b981" label="Humedad" valueLabel={`${garden.humidity}%`} Icon={IconLeaf} />
                <CircularGauge percent={(garden.temperature / 40) * 100} size={100} stroke={8} color="#f59e0b" label="Temperatura" valueLabel={`${garden.temperature}°C`} Icon={IconThermometer} />
                <CircularGauge percent={garden.light} size={100} stroke={8} color="#eab308" label="Nivel de luz" valueLabel={`${garden.light}%`} Icon={IconSun} />
              </div>
            </motion.div>

            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="bg-white rounded-2xl p-4 shadow-sm">
              <h2 className="text-sm font-bold text-gray-800 mb-2 flex items-center gap-2">
                <div className="w-1 h-4 bg-emerald-500 rounded-full"></div>
                Notas
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">{garden.notes}</p>
            </motion.div>

            <motion.button initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }} onClick={() => setShowCareGuide(true)} className="w-full bg-white text-emerald-700 font-semibold py-3.5 rounded-xl shadow-sm hover:shadow-md transition-all active:scale-[0.98] flex items-center justify-center gap-2">
              <IconBook className="w-5 h-5" />
              Ver guía de cuidados
            </motion.button>
          </div>
        </div>

        {/* bottom button */}
        <div className="sticky bottom-0 bg-white border-t border-gray-200 p-5 shadow-lg">
          <button onClick={simulateIrrigation} disabled={isPumping} className={`w-full ${isPumping ? "opacity-80 pointer-events-none" : ""} bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all active:scale-[0.98] flex items-center justify-center gap-3`}>
            <IconWater className="w-5 h-5" />
            {isPumping ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full border-2 border-white animate-spin" />
                <span>Registrando riego…</span>
              </div>
            ) : (
              <span>Registrar riego manual</span>
            )}
          </button>
        </div>
      </div>

      {/* guide modal */}
      <AnimatePresence>
        {showCareGuide && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40" onClick={() => setShowCareGuide(false)} />
            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 50 }} transition={{ type: "spring", damping: 25, stiffness: 300 }} className="fixed inset-x-4 top-20 bottom-20 bg-white rounded-3xl shadow-2xl z-50 overflow-hidden flex flex-col max-w-md mx-auto">
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-5 flex-shrink-0">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <IconBook className="w-6 h-6 text-white" />
                    <h3 className="text-lg font-bold text-white">Guía de cuidados</h3>
                  </div>
                  <button onClick={() => setShowCareGuide(false)} className="p-2 rounded-lg hover:bg-white/10 transition-colors">
                    <IconClose className="w-5 h-5 text-white" />
                  </button>
                </div>
                <p className="text-white/90 text-sm">{garden.plant}</p>
              </div>

              <div className="flex-1 overflow-y-auto p-5 space-y-5">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-cyan-600 font-bold text-sm">
                    <IconWater className="w-5 h-5" />
                    <h4>Riego</h4>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed pl-7">{careGuide.watering}</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-amber-600 font-bold text-sm">
                    <IconSun className="w-5 h-5" />
                    <h4>Luz solar</h4>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed pl-7">{careGuide.sunlight}</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-orange-600 font-bold text-sm">
                    <IconThermometer className="w-5 h-5" />
                    <h4>Temperatura</h4>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed pl-7">{careGuide.temperature}</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-green-600 font-bold text-sm">
                    <IconLeaf className="w-5 h-5" />
                    <h4>Fertilización</h4>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed pl-7">{careGuide.fertilization}</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-red-600 font-bold text-sm">
                    <IconAlert className="w-5 h-5" />
                    <h4>Problemas comunes</h4>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed pl-7">{careGuide.commonProblems}</p>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-blue-600 font-bold text-sm">
                    <IconStar className="w-5 h-5" />
                    <h4>Consejos profesionales</h4>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed pl-7">{careGuide.tips}</p>
                </div>
              </div>

              <div className="p-5 border-t border-gray-200 flex-shrink-0">
                <button onClick={() => setShowCareGuide(false)} className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold py-3 rounded-xl transition-all active:scale-[0.98]">
                  Cerrar guía
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* toast/progress overlay */}
      <AnimatePresence>
        {toastVisible && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.35 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 pointer-events-none" />
            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} transition={{ type: "spring", stiffness: 300, damping: 25 }} className="fixed left-1/2 top-6 -translate-x-1/2 z-50">
              <div className="min-w-[320px] max-w-sm bg-white rounded-xl shadow-2xl p-4 border border-gray-100">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-emerald-50 rounded-lg">
                      <IconWater className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-800">Registro de riego</div>
                      <div className="text-xs text-gray-500">Simulación de la bomba</div>
                    </div>
                  </div>
                  <div className="text-xs font-medium text-gray-600">{progress}%</div>
                </div>

                <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden mb-3">
                  <motion.div initial={{ width: 0 }} animate={{ width: `${progress}%` }} transition={{ ease: "easeOut", duration: 0.3 }} className={`h-2 rounded-full ${resultState === "error" ? "bg-red-500" : "bg-emerald-500"}`} />
                </div>

                <div className="text-sm text-gray-700 mb-3">
                  {isPumping && <div>Conectando a la bomba — por favor espera.</div>}
                  {!isPumping && resultState === "success" && <div className="text-emerald-700">Riego registrado correctamente.</div>}
                  {!isPumping && resultState === "error" && <div className="text-red-600">Error: no se pudo completar el riego. Intenta de nuevo.</div>}
                </div>

                <div className="flex gap-2">
                  {!isPumping && resultState === "success" && undoToken && (
                    <button onClick={handleUndo} className="flex-1 bg-white border border-gray-200 text-gray-800 py-2 rounded-lg font-medium hover:bg-gray-50">
                      Deshacer
                    </button>
                  )}
                  {!isPumping && resultState === "error" && (
                    <button onClick={() => { setToastVisible(false); setResultState(null) }} className="flex-1 bg-white border border-gray-200 text-gray-800 py-2 rounded-lg font-medium hover:bg-gray-50">
                      Cerrar
                    </button>
                  )}
                  {isPumping && (
                    <button onClick={() => setToastVisible(false)} className="flex-1 bg-white border border-gray-200 text-gray-800 py-2 rounded-lg font-medium hover:bg-gray-50">
                      Ocultar
                    </button>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
