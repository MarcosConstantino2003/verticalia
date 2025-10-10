"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import * as safeStorage from "@/lib/safe-storage"

const IconWater = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 3s5 5.5 5 9a5 5 0 11-10 0c0-3.5 5-9 5-9z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const IconLeaf = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5 20c8 0 14-6 14-14 0-1-.1-2-.3-3-5.7.4-10.4 3.2-12.9 7.7A9.99 9.99 0 005 20z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const IconThermometer = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="11" y="2" width="2" height="12" rx="1" stroke="currentColor" strokeWidth="1.4" />
    <path
      d="M12 18a3 3 0 100-6 3 3 0 000 6z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const IconSun = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.4" />
    <path
      d="M12 2v1M12 21v1M4.2 4.2l.7.7M19.1 19.1l.7.7M2 12h1M21 12h1"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
    />
  </svg>
)

const IconArrowLeft = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const IconCalendar = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="4" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M16 2v4M8 2v4M3 10h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const IconDroplet = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const IconSprout = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7 20v-8a4 4 0 014-4 4 4 0 014 4v8M7 12a4 4 0 014-4 4 4 0 014 4"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const IconBook = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4 19.5A2.5 2.5 0 016.5 17H20"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

function CircularGauge({
  percent = 50,
  size = 100,
  stroke = 8,
  color = "#34D399",
  label = "",
  valueLabel = "",
  Icon = null,
}) {
  const r = (size - stroke) / 2
  const circumference = 2 * Math.PI * r
  const offset = circumference * (1 - percent / 100)
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative inline-flex">
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          <circle cx={size / 2} cy={size / 2} r={r} stroke="#ecfdf5" strokeWidth={stroke} fill="none" />
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
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-sm">
          {Icon ? <div className="mb-1 text-gray-700/80">{Icon({ className: "w-5 h-5" })}</div> : null}
          <div className="font-semibold text-xs">{valueLabel}</div>
        </div>
      </div>
      <div className="text-xs text-gray-600 text-center">{label}</div>
    </div>
  )
}

// Mock data for different gardens
const gardenData = {
  "1": {
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
    waterHistory: [
      { date: "10 Feb", amount: "2.5L" },
      { date: "7 Feb", amount: "2.3L" },
      { date: "4 Feb", amount: "2.4L" },
    ],
  },
  "2": {
    name: "Huerta B",
    plant: "Papa",
    plantedDate: "20 Ene 2025",
    harvestDate: "20 Abr 2025",
    nextWater: "3 días",
    waterLevel: 65,
    humidity: 48,
    temperature: 22,
    light: 80,
    status: "Saludable",
    notes: "Desarrollo normal. Revisar plagas semanalmente.",
    waterHistory: [
      { date: "9 Feb", amount: "2.6L" },
      { date: "6 Feb", amount: "2.4L" },
      { date: "3 Feb", amount: "2.5L" },
    ],
  },
  "3": {
    name: "Huerta C",
    plant: "Lechuga",
    plantedDate: "1 Feb 2025",
    harvestDate: "15 Mar 2025",
    nextWater: "1 día",
    waterLevel: 65,
    humidity: 48,
    temperature: 22,
    light: 80,
    status: "Saludable",
    notes: "Nivel de agua bajo. Regar pronto.",
    waterHistory: [
      { date: "11 Feb", amount: "1.8L" },
      { date: "9 Feb", amount: "1.9L" },
      { date: "7 Feb", amount: "1.7L" },
    ],
  },
  "4": {
    name: "Huerta D",
    plant: "Zanahoria",
    plantedDate: "10 Ene 2025",
    harvestDate: "10 Abr 2025",
    nextWater: "4 días",
    waterLevel: 65,
    humidity: 48,
    temperature: 22,
    light: 80,
    status: "Excelente",
    notes: "Condiciones ideales. Continuar monitoreo.",
    waterHistory: [
      { date: "8 Feb", amount: "2.2L" },
      { date: "4 Feb", amount: "2.1L" },
      { date: "31 Ene", amount: "2.3L" },
    ],
  },
  "5": {
    name: "Huerta E",
    plant: "Cebolla",
    plantedDate: "25 Ene 2025",
    harvestDate: "25 Abr 2025",
    nextWater: "2 días",
    waterLevel: 65,
    humidity: 48,
    temperature: 22,
    light: 80,
    status: "Saludable",
    notes: "Crecimiento constante. Mantener condiciones actuales.",
    waterHistory: [
      { date: "10 Feb", amount: "2.0L" },
      { date: "7 Feb", amount: "2.1L" },
      { date: "4 Feb", amount: "1.9L" },
    ],
  },
}

// Care guides data for each plant type
const careGuides: Record<
  string,
  {
    watering: string
    sunlight: string
    temperature: string
    fertilization: string
    commonProblems: string
    tips: string
  }
> = {
  Papa: {
    watering:
      "Regar profundamente 2-3 veces por semana. El suelo debe mantenerse húmedo pero no encharcado. Aumentar la frecuencia durante la formación de tubérculos.",
    sunlight: "Requiere 6-8 horas de luz solar directa al día. Tolera sombra parcial pero reduce el rendimiento.",
    temperature:
      "Temperatura óptima entre 15-20°C. Evitar temperaturas superiores a 30°C que pueden afectar la formación de tubérculos.",
    fertilization:
      "Aplicar fertilizante rico en potasio cada 3-4 semanas. Evitar exceso de nitrógeno que favorece el follaje sobre los tubérculos.",
    commonProblems:
      "Tizón tardío (manchas marrones en hojas), escarabajo de la papa, y pudrición por exceso de humedad. Inspeccionar regularmente.",
    tips: "Aporcar (cubrir con tierra) los tallos cada 2-3 semanas para proteger los tubérculos de la luz solar y aumentar el rendimiento.",
  },
  Lechuga: {
    watering:
      "Regar frecuentemente manteniendo el suelo constantemente húmedo. Preferir riegos ligeros diarios en lugar de riegos profundos espaciados.",
    sunlight:
      "4-6 horas de luz solar. En climas cálidos, beneficia de sombra parcial durante las horas más calurosas del día.",
    temperature:
      "Crece mejor entre 15-20°C. Temperaturas superiores a 25°C pueden causar floración prematura (espigado).",
    fertilization:
      "Aplicar fertilizante balanceado rico en nitrógeno cada 2 semanas para promover hojas verdes y tiernas.",
    commonProblems:
      "Pulgones, babosas, y pudrición de raíz por exceso de agua. El espigado prematuro en temperaturas altas.",
    tips: "Cosechar en las mañanas para mejor sabor y textura. Las hojas exteriores se pueden cosechar continuamente mientras crece el centro.",
  },
  Zanahoria: {
    watering:
      "Mantener suelo uniformemente húmedo, especialmente durante la germinación. Regar profundamente 1-2 veces por semana una vez establecida.",
    sunlight:
      "Requiere pleno sol, 6-8 horas diarias. Puede tolerar sombra ligera pero afecta el desarrollo de la raíz.",
    temperature: "Temperatura ideal 16-21°C. Tolera frío ligero. Las temperaturas frescas mejoran el sabor y dulzura.",
    fertilization:
      "Evitar fertilizantes ricos en nitrógeno que causan raíces bifurcadas. Usar compost bien descompuesto antes de plantar.",
    commonProblems:
      "Mosca de la zanahoria, raíces bifurcadas por suelo compactado o piedras, y pudrición por exceso de humedad.",
    tips: "Asegurar suelo suelto y libre de piedras para raíces rectas. Ralear plántulas a 5-7cm de distancia para mejor desarrollo.",
  },
  Cebolla: {
    watering:
      "Regar regularmente durante el crecimiento, 2-3 veces por semana. Reducir riego 2 semanas antes de la cosecha para mejor conservación.",
    sunlight: "Pleno sol, mínimo 6 horas diarias. La luz solar directa es crucial para el desarrollo del bulbo.",
    temperature: "Crece bien entre 13-24°C. Requiere temperaturas frescas para iniciar formación del bulbo.",
    fertilization:
      "Fertilizar cada 3 semanas con fertilizante rico en nitrógeno durante crecimiento vegetativo. Cambiar a fósforo y potasio al formar bulbos.",
    commonProblems:
      "Trips (insectos pequeños), mildiu, y pudrición del cuello. Evitar daño al follaje que puede permitir entrada de enfermedades.",
    tips: "Cuando el follaje comience a caer naturalmente, es señal de que los bulbos están listos. Curar al sol 1-2 días antes de almacenar.",
  },
  Tomate: {
    watering:
      "Regar profundamente 2-3 veces por semana. Mantener humedad constante para evitar rajado de frutos. Evitar mojar el follaje.",
    sunlight: "Requiere 6-8 horas de luz solar directa. Más luz resulta en mejor producción y sabor de frutos.",
    temperature:
      "Temperatura óptima 21-27°C. No tolera heladas. Temperaturas nocturnas bajo 13°C afectan la fructificación.",
    fertilization:
      "Fertilizar cada 2 semanas con fertilizante balanceado. Aumentar potasio durante fructificación para mejor sabor.",
    commonProblems:
      "Tizón temprano y tardío, gusano del tomate, y pudrición apical por deficiencia de calcio. Tutorear para mejor circulación de aire.",
    tips: "Podar chupones (brotes laterales) para concentrar energía en frutos. Mulch ayuda a mantener humedad constante y prevenir enfermedades.",
  },
}

export default function HuertaDetailPage({ params }: { params: { id: string } }) {
  const { id } = params
  const router = useRouter()
  const [garden, setGarden] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [showCareGuide, setShowCareGuide] = useState(false)

  useEffect(() => {
    let gardenInfo = gardenData[id as keyof typeof gardenData]

    if (!gardenInfo) {
      const stored = safeStorage.getItem("verticalia-huertas")
      if (stored) {
        try {
          const huertas = JSON.parse(stored)
          const foundGarden = huertas.find((h: any) => h.id.toString() === id)

          if (foundGarden) {
            gardenInfo = {
              name: foundGarden.name,
              plant: foundGarden.plant,
              plantedDate: foundGarden.plantingDate || "Reciente",
              harvestDate: "Por determinar",
              nextWater: foundGarden.nextWater || "3 días",
              waterLevel: 65,
              humidity: 48,
              temperature: 22,
              light: 80,
              status: "Saludable",
              notes: foundGarden.notes || "Huerta recién creada. Monitorear desarrollo.",
              waterHistory: [{ date: "Hoy", amount: "2.0L" }],
            }
          }
        } catch (e) {
          console.warn("[v0] Error loading garden from storage", e)
        }
      }
    }

    setGarden(gardenInfo)
    setLoading(false)
  }, [id])

  if (loading) {
    return (
      <div className="min-h-screen bg-emerald-50 flex items-center justify-center">
        <div className="text-emerald-700 font-medium">Cargando...</div>
      </div>
    )
  }

  if (!garden) {
    return (
      <div className="min-h-screen bg-emerald-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl p-6 shadow-lg max-w-sm text-center">
          <h2 className="text-lg font-bold text-gray-800 mb-2">Huerta no encontrada</h2>
          <p className="text-gray-600 mb-4">No se pudo encontrar la información de esta huerta.</p>
          <Button onClick={() => router.push("/")} className="bg-emerald-600 hover:bg-emerald-700">
            Volver al inicio
          </Button>
        </div>
      </div>
    )
  }

  const statusColor =
    garden.status === "Excelente"
      ? "text-green-600 bg-green-50"
      : garden.status === "Saludable"
        ? "text-emerald-600 bg-emerald-50"
        : "text-orange-600 bg-orange-50"

  const careGuide = careGuides[garden.plant] || careGuides.Papa

  return (
    <div className="min-h-screen bg-emerald-50 relative overflow-hidden">
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

      <div className="relative z-10 max-w-md mx-auto p-4">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="flex items-center gap-3 mb-4"
        >
          <Link
            href="/"
            className="p-2 bg-white/70 backdrop-blur-sm rounded-lg shadow-sm hover:bg-white transition-colors"
          >
            <IconArrowLeft className="w-5 h-5 text-emerald-700" />
          </Link>
          <div className="flex-1">
            <h1 className="text-xl font-bold text-emerald-800">{garden.name}</h1>
            <p className="text-sm text-emerald-600">{garden.plant}</p>
          </div>
          <div className={`px-3 py-1 rounded-full text-xs font-medium ${statusColor}`}>{garden.status}</div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-lg mb-4"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-emerald-100 rounded-lg">
              <IconSprout className="w-6 h-6 text-emerald-700" />
            </div>
            <div className="flex-1">
              <div className="text-xs text-gray-600">Próximo riego</div>
              <div className="text-lg font-bold text-emerald-700">{garden.nextWater}</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 pt-3 border-t border-emerald-100">
            <div className="flex items-center gap-2">
              <IconCalendar className="w-4 h-4 text-gray-500" />
              <div>
                <div className="text-xs text-gray-500">Plantado</div>
                <div className="text-sm font-medium text-gray-700">{garden.plantedDate}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <IconCalendar className="w-4 h-4 text-gray-500" />
              <div>
                <div className="text-xs text-gray-500">Cosecha est.</div>
                <div className="text-sm font-medium text-gray-700">{garden.harvestDate}</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-lg mb-4"
        >
          <h2 className="text-sm font-semibold text-emerald-800 mb-3">Métricas actuales</h2>
          <div className="grid grid-cols-2 gap-4">
            <CircularGauge
              percent={garden.waterLevel}
              size={90}
              stroke={8}
              color="#a8dadc"
              label="Nivel de agua"
              valueLabel={`${garden.waterLevel}%`}
              Icon={IconWater}
            />
            <CircularGauge
              percent={garden.humidity}
              size={90}
              stroke={8}
              color="#81b29a"
              label="Humedad"
              valueLabel={`${garden.humidity}%`}
              Icon={IconLeaf}
            />
            <CircularGauge
              percent={(garden.temperature / 40) * 100}
              size={90}
              stroke={8}
              color="#e07a5f"
              label="Temperatura"
              valueLabel={`${garden.temperature}°C`}
              Icon={IconThermometer}
            />
            <CircularGauge
              percent={garden.light}
              size={90}
              stroke={8}
              color="#f2cc8f"
              label="Nivel de luz"
              valueLabel={`${garden.light}%`}
              Icon={IconSun}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="bg-white/70 backdrop-blur-sm rounded-xl p-4 shadow-lg mb-4"
        >
          <h2 className="text-sm font-semibold text-emerald-800 mb-2">Notas</h2>
          <p className="text-sm text-gray-700 leading-relaxed">{garden.notes}</p>
        </motion.div>

        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          onClick={() => setShowCareGuide(true)}
          className="w-full bg-white hover:bg-gray-50 text-emerald-700 font-medium py-3 rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2 mb-3 border border-emerald-200"
        >
          <IconBook className="w-5 h-5" />
          Guía de cuidados
        </motion.button>

        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2"
        >
          <IconWater className="w-5 h-5" />
          Registrar riego manual
        </motion.button>
      </div>

      <Dialog open={showCareGuide} onOpenChange={setShowCareGuide}>
        <DialogContent className="max-w-md max-h-[85vh] overflow-y-auto bg-white">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-emerald-800 flex items-center gap-2">
              <IconBook className="w-6 h-6" />
              Guía de cuidados - {garden.plant}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-emerald-700 font-semibold">
                <IconWater className="w-5 h-5" />
                <h3>Riego</h3>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed pl-7">{careGuide.watering}</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-amber-600 font-semibold">
                <IconSun className="w-5 h-5" />
                <h3>Luz solar</h3>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed pl-7">{careGuide.sunlight}</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-orange-600 font-semibold">
                <IconThermometer className="w-5 h-5" />
                <h3>Temperatura</h3>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed pl-7">{careGuide.temperature}</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-green-600 font-semibold">
                <IconLeaf className="w-5 h-5" />
                <h3>Fertilización</h3>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed pl-7">{careGuide.fertilization}</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-red-600 font-semibold">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <h3>Problemas comunes</h3>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed pl-7">{careGuide.commonProblems}</p>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-blue-600 font-semibold">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <h3>Consejos profesionales</h3>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed pl-7">{careGuide.tips}</p>
            </div>
          </div>

          <div className="pt-4 border-t">
            <Button onClick={() => setShowCareGuide(false)} className="w-full bg-emerald-600 hover:bg-emerald-700">
              Cerrar guía
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
