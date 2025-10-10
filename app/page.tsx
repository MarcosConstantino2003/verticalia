"use client"

import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { useEffect, useState } from "react"
import * as safeStorage from "@/lib/safe-storage"
import Image from "next/image"

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
const IconBell = ({ className = "w-6 h-6" }) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
    />
  </svg>
)
const IconChevronRight = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)
const IconPlus = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const IconSettings = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M12 1v3m0 16v3M4.22 4.22l2.12 2.12m11.32 11.32l2.12 2.12M1 12h3m16 0h3M4.22 19.78l2.12-2.12m11.32-11.32l2.12-2.12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
)

const IconHistory = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const IconUser = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
    <path
      d="M6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2M1 12h3m16 0h3M4.22 4.22l2.12 2.12m11.32 11.32l2.12 2.12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
)

const IconNotification = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const IconHelp = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
    <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="12" cy="17" r="0.5" fill="currentColor" />
  </svg>
)

const IconInfo = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
    <path d="M12 16v-4m0-4h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
)

const IconLogout = ({ className = "w-5 h-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4m7 14l5-5-5-5m5 5H9"
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

function CircularGauge({
  percent = 50,
  size = 120,
  stroke = 10,
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
          {Icon ? <div className="mb-1 text-gray-700/80">{Icon({ className: "w-6 h-6" })}</div> : null}
          <div className="font-semibold text-sm">{valueLabel}</div>
        </div>
      </div>
      <div className="text-xs text-gray-600">{label}</div>
    </div>
  )
}

export default function VerticaliaDashboard() {
  // Panel lateral
  const [isPanelOpen, setIsPanelOpen] = useState(false)

  // Huertas (persistidas)
  const [huertas, setHuertas] = useState([
    { id: 1, name: "Huerta A", plant: "Papa", nextWater: "2 días" },
    { id: 2, name: "Huerta B", plant: "Papa", nextWater: "3 días" },
    { id: 3, name: "Huerta C", plant: "Lechuga", nextWater: "1 día" },
    { id: 4, name: "Huerta D", plant: "Zanahoria", nextWater: "4 días" },
    { id: 5, name: "Huerta E", plant: "Cebolla", nextWater: "2 días" },
  ])

  useEffect(() => {
    const stored = safeStorage.getItem("verticalia-huertas")
    if (stored) {
      try {
        setHuertas(JSON.parse(stored))
      } catch (e) {
        console.warn("[v0] Error parsing gardens from storage", e)
      }
    }
  }, [])

  useEffect(() => {
    try {
      safeStorage.setItem("verticalia-huertas", JSON.stringify(huertas))
    } catch (e) {
      console.warn("[v0] Error saving gardens to storage", e)
    }
  }, [huertas])

  const metrics = [
    { id: "water", label: "Nivel de agua", percent: 65, color: "#a8dadc", valueLabel: "65%", Icon: IconWater },
    { id: "humidity", label: "Humedad", percent: 48, color: "#81b29a", valueLabel: "48%", Icon: IconLeaf },
    { id: "temp", label: "Temperatura", percent: 55, color: "#e07a5f", valueLabel: "22°C", Icon: IconThermometer },
    { id: "light", label: "Nivel de luz", percent: 80, color: "#f2cc8f", valueLabel: "80%", Icon: IconSun },
  ]

  const menuItems = [
    { id: "profile", label: "Mi perfil", icon: IconUser },
    { id: "settings", label: "Configuración", icon: IconSettings },
    { id: "history", label: "Historial", icon: IconHistory },
    { id: "notifications", label: "Notificaciones", icon: IconNotification },
    { id: "help", label: "Ayuda y soporte", icon: IconHelp },
    { id: "about", label: "Acerca de", icon: IconInfo },
    { id: "logout", label: "Cerrar sesión", icon: IconLogout, danger: true },
  ]

  const handleMenuItemClick = (item) => {
    console.log(`[v0] Menu item clicked: ${item.label}`)
    setIsPanelOpen(false)
    if (item.id === "logout") {
      console.log("[v0] Logout action triggered")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-emerald-50 relative overflow-hidden backdrop-blur-md">
      {/* Fondo SVG decorativo con triángulos verdes */}
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

      <AnimatePresence>
        {isPanelOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              onClick={() => setIsPanelOpen(false)}
            />

            {/* Side Panel */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 bottom-0 w-80 bg-white shadow-2xl z-50 overflow-y-auto"
            >
              {/* Panel Header */}
              <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 p-6 pb-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="text-white font-bold text-xl tracking-wide">VERTICALIA</div>
                  <button
                    onClick={() => setIsPanelOpen(false)}
                    className="p-1 hover:bg-white/20 rounded-lg transition-colors"
                    aria-label="Cerrar menú"
                  >
                    <IconClose className="w-6 h-6 text-white" />
                  </button>
                </div>

                {/* User Info */}
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-emerald-700 font-bold text-2xl shadow-lg">
                    M
                  </div>
                  <div>
                    <div className="text-white font-semibold text-lg">Marcos</div>
                    <div className="text-emerald-100 text-sm">marcos@verticalia.com</div>
                  </div>
                </div>
              </div>

              {/* Menu Items */}
              <div className="p-4">
                <nav className="space-y-1">
                  {menuItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => handleMenuItemClick(item)}
                      className={`w-full flex items-center gap-4 px-4 py-3.5 rounded-xl transition-all hover:bg-emerald-50 group active:scale-[0.98] ${
                        item.danger ? "hover:bg-red-50" : ""
                      }`}
                    >
                      <div
                        className={`p-2 rounded-lg transition-colors ${
                          item.danger
                            ? "bg-red-50 text-red-600 group-hover:bg-red-100"
                            : "bg-emerald-50 text-emerald-600 group-hover:bg-emerald-100"
                        }`}
                      >
                        <item.icon className="w-5 h-5" />
                      </div>
                      <span
                        className={`font-medium ${item.danger ? "text-red-600" : "text-gray-700 group-hover:text-emerald-700"}`}
                      >
                        {item.label}
                      </span>
                      <IconChevronRight
                        className={`w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity ${
                          item.danger ? "text-red-400" : "text-emerald-400"
                        }`}
                      />
                    </motion.button>
                  ))}
                </nav>

                {/* App Version */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="text-center text-xs text-gray-400">
                    Verticalia v1.0.0
                    <br />
                    <span className="text-gray-300">© 2025 Todos los derechos reservados</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="w-full max-w-xs rounded-2xl shadow-xl p-4 relative z-10 overflow-hidden">
        <div className="absolute inset-0 opacity-30 pointer-events-none">
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            viewBox="0 0 400 800"
          >
            <polygon points="100,50 220,250 -20,250" fill="#10B981" />
            <polygon points="300,200 420,400 180,400" fill="#34D399" />
            <polygon points="220,540 340,760 80,760" fill="#86EFAC" />
          </svg>
        </div>

        {/* Header con campanita */}
        <div className="flex flex-col gap-2 relative">
          <div className="text-center flex justify-center">
            <Image
              src="/images/logo.png"
              alt="Verticalia Logo"
              width={300}
              height={75}
              className="h-24 w-auto"
              priority
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              onClick={() => setIsPanelOpen(true)}
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            >
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-emerald-700 font-bold shadow">
                M
              </div>
              <div className="text-sm text-emerald-800 font-semibold">Marcos</div>
            </button>

            <button className="p-2 bg-emerald-50 rounded-lg relative" aria-label="Notificaciones">
              <IconBell className="text-emerald-700" />
            </button>
          </div>
        </div>

        {/* Tarjeta de tiempo restante */}
        <motion.div
          initial={{ y: 8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="mt-4 bg-white/70 rounded-xl p-3 shadow-sm border border-emerald-100 backdrop-blur-sm"
        >
          <div className="flex items-center justify-between gap-3">
            <div>
              <div className="text-xs text-gray-600">Tiempo restante para agregar agua</div>
              <div className="mt-1 text-base font-medium flex items-center gap-2">
                <span className="font-bold text-cyan-400">4 días</span>
                <span className="text-gray-400 text-sm">(est.)</span>
              </div>
            </div>
            <div className="p-2 bg-emerald-50 rounded-lg">
              <IconWater className="w-6 h-6 text-cyan-400" />
            </div>
          </div>
        </motion.div>

        {/* Métricas */}
        <div className="mt-4 grid grid-cols-2 gap-3">
          {metrics.map((m) => (
            <motion.div
              key={m.id}
              initial={{ y: 6, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="bg-white/70 rounded-xl p-3 shadow-sm flex items-center justify-center backdrop-blur-sm"
            >
              <CircularGauge
                percent={m.percent}
                size={104}
                stroke={10}
                color={m.color}
                label={m.label}
                valueLabel={m.valueLabel}
                Icon={m.Icon}
              />
            </motion.div>
          ))}
        </div>

        {/* Huertas */}
        <div className="mt-4">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm font-semibold text-emerald-800">Huertas activas</div>
            <div className="flex items-center gap-2">
              <div className="text-xs text-gray-500">{huertas.length}</div>
              <Link href="/agregar-huerta">
                <button
                  className="h-7 w-7 p-0 bg-emerald-600 hover:bg-emerald-700 text-white rounded-full shadow-md flex items-center justify-center transition-colors"
                  aria-label="Agregar huerta"
                >
                  <IconPlus className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            {huertas.map((h) => (
              <Link key={h.id} href={`/huerta/${h.id}`}>
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white/70 rounded-lg p-3 shadow-inner border border-emerald-100 flex items-center justify-between backdrop-blur-sm hover:bg-white/90 hover:shadow-md transition-all cursor-pointer"
                >
                  <div>
                    <div className="text-sm font-medium text-emerald-700">
                      {h.name} - {h.plant}
                    </div>
                    <div className="text-xs text-gray-600 mt-1">Próx. riego: {h.nextWater}</div>
                  </div>
                  <div className="p-2 rounded-md bg-emerald-50">
                    <IconChevronRight className="w-5 h-5 text-emerald-700" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
