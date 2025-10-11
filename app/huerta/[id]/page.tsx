"use client"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

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

const IconClose = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const IconAlert = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const IconStar = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
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
            style={{ transition: 'stroke-dashoffset 0.5s ease' }}
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

const careGuides = {
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
}

export default function HuertaDetailPage() {
  const [showCareGuide, setShowCareGuide] = useState(false)

  const garden = {
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
  }

  const handleBack = () => {
    window.location.href = "/"
  }

  const statusColor =
    garden.status === "Excelente"
      ? "text-green-600 bg-green-100"
      : garden.status === "Saludable"
        ? "text-emerald-600 bg-emerald-100"
        : "text-orange-600 bg-orange-100"

  const careGuide = careGuides[garden.plant] || careGuides.Papa

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-teal-300/15 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-emerald-300/10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        {/* Header compacto */}
        <div className="bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-500 px-5 py-4 shadow-lg">
          <div className="flex items-center gap-3">
            <button
              onClick={handleBack}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-all active:scale-95 backdrop-blur-sm"
              aria-label="Volver"
            >
              <IconArrowLeft className="text-white" />
            </button>
            <div className="flex-1">
              <h1 className="text-lg font-bold text-white">{garden.name}</h1>
              <p className="text-sm text-white/90">{garden.plant}</p>
            </div>
            <div className={`px-3 py-1.5 rounded-full text-xs font-bold ${statusColor}`}>{garden.status}</div>
          </div>
        </div>

        {/* Contenido con scroll */}
        <div className="flex-1 overflow-y-auto pb-24">
          <div className="p-5 space-y-4">
            {/* Card de próximo riego destacada */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="relative overflow-hidden bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl p-5 shadow-lg"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
              <div className="relative flex items-center justify-between gap-4">
                <div>
                  <div className="text-white/90 text-xs font-medium mb-1">Próximo riego</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-white font-bold text-3xl">{garden.nextWater.split(' ')[0]}</span>
                    <span className="text-white/90 text-sm">{garden.nextWater.split(' ')[1]}</span>
                  </div>
                  <div className="text-white/70 text-xs mt-1">Estimado</div>
                </div>
                <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl">
                  <IconWater className="w-8 h-8 text-white" />
                </div>
              </div>
            </motion.div>

            {/* Fechas importantes */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-4 shadow-sm"
            >
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

            {/* Métricas */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-5 shadow-sm"
            >
              <h2 className="text-base font-bold text-gray-800 mb-4">Métricas actuales</h2>
              <div className="grid grid-cols-2 gap-4">
                <CircularGauge
                  percent={garden.waterLevel}
                  size={100}
                  stroke={8}
                  color="#06b6d4"
                  label="Nivel de agua"
                  valueLabel={`${garden.waterLevel}%`}
                  Icon={IconWater}
                />
                <CircularGauge
                  percent={garden.humidity}
                  size={100}
                  stroke={8}
                  color="#10b981"
                  label="Humedad"
                  valueLabel={`${garden.humidity}%`}
                  Icon={IconLeaf}
                />
                <CircularGauge
                  percent={(garden.temperature / 40) * 100}
                  size={100}
                  stroke={8}
                  color="#f59e0b"
                  label="Temperatura"
                  valueLabel={`${garden.temperature}°C`}
                  Icon={IconThermometer}
                />
                <CircularGauge
                  percent={garden.light}
                  size={100}
                  stroke={8}
                  color="#eab308"
                  label="Nivel de luz"
                  valueLabel={`${garden.light}%`}
                  Icon={IconSun}
                />
              </div>
            </motion.div>

            {/* Notas */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-4 shadow-sm"
            >
              <h2 className="text-sm font-bold text-gray-800 mb-2 flex items-center gap-2">
                <div className="w-1 h-4 bg-emerald-500 rounded-full"></div>
                Notas
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">{garden.notes}</p>
            </motion.div>

            {/* Botón de guía */}
            <motion.button
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              onClick={() => setShowCareGuide(true)}
              className="w-full bg-white text-emerald-700 font-semibold py-3.5 rounded-xl shadow-sm hover:shadow-md transition-all active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <IconBook className="w-5 h-5" />
              Ver guía de cuidados
            </motion.button>
          </div>
        </div>

        {/* Botón fijo inferior */}
        <div className="sticky bottom-0 bg-white border-t border-gray-200 p-5 shadow-lg">
          <button className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold py-3.5 rounded-xl shadow-lg hover:shadow-xl transition-all active:scale-[0.98] flex items-center justify-center gap-2">
            <IconWater className="w-5 h-5" />
            Registrar riego manual
          </button>
        </div>
      </div>

      {/* Modal de guía de cuidados */}
      <AnimatePresence>
        {showCareGuide && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              onClick={() => setShowCareGuide(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed inset-x-4 top-20 bottom-20 bg-white rounded-3xl shadow-2xl z-50 overflow-hidden flex flex-col max-w-md mx-auto"
            >
              {/* Header del modal */}
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-5 flex-shrink-0">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <IconBook className="w-6 h-6 text-white" />
                    <h3 className="text-lg font-bold text-white">Guía de cuidados</h3>
                  </div>
                  <button
                    onClick={() => setShowCareGuide(false)}
                    className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <IconClose className="w-5 h-5 text-white" />
                  </button>
                </div>
                <p className="text-white/90 text-sm">{garden.plant}</p>
              </div>

              {/* Contenido scrolleable */}
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

              {/* Footer del modal */}
              <div className="p-5 border-t border-gray-200 flex-shrink-0">
                <button
                  onClick={() => setShowCareGuide(false)}
                  className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold py-3 rounded-xl transition-all active:scale-[0.98]"
                >
                  Cerrar guía
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}