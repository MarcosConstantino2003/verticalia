"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import * as safeStorage from "@/lib/safe-storage"
import Link from "next/link"

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
    <path d="M6 21v-2a4 4 0 014-4h4a4 4 0 014 4v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
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
const IconMenu = ({ className = "w-6 h-6" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
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
            style={{ transition: "stroke-dashoffset 0.5s ease" }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-sm">
          {Icon ? <div className="mb-1 text-gray-700/90">{Icon({ className: "w-6 h-6" })}</div> : null}
          <div className="font-bold text-base text-gray-800">{valueLabel}</div>
        </div>
      </div>
      <div className="text-xs font-medium text-gray-600">{label}</div>
    </div>
  )
}

export default function VerticaliaDashboard() {
  const [isPanelOpen, setIsPanelOpen] = useState(false)
  const [showNotifications, setShowNotifications] = useState(false)
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Riego programado",
      message: "Huerta C necesita riego en 1 día",
      time: "Hace 2 horas",
      read: false,
    },
    {
      id: 2,
      title: "Nivel de agua bajo",
      message: "El tanque principal está al 65%",
      time: "Hace 5 horas",
      read: false,
    },
    { id: 3, title: "Temperatura alta", message: "La temperatura alcanzó 28°C", time: "Ayer", read: true },
  ])

  const [huertas, setHuertas] = useState([
    { id: 1, name: "Huerta A", plant: "Papa", nextWater: "2 días", status: "good" },
    { id: 2, name: "Huerta B", plant: "Papa", nextWater: "3 días", status: "good" },
    { id: 3, name: "Huerta C", plant: "Lechuga", nextWater: "1 día", status: "warning" },
    { id: 4, name: "Huerta D", plant: "Acelga", nextWater: "4 días", status: "good" },
    { id: 5, name: "Huerta E", plant: "Cebolla", nextWater: "2 días", status: "good" },
    { id: 6, name: "Huerta F", plant: "Acelga", nextWater: "4 días", status: "good" },
    { id: 7, name: "Nueva", plant: "Zanahoria", nextWater: "4 días", status: "good" },
  ])
  ])

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    try {
      const stored = safeStorage.getItem("verticalia-huertas")
      if (stored) {
        try {
          setHuertas(JSON.parse(stored))
        } catch (e) {
          console.warn("[v0] Error parsing gardens from storage", e)
        }
      }
    } catch (e) {
      console.warn("[v0] Error loading gardens", e)
    }
  }, [mounted])

  useEffect(() => {
    if (!mounted) return

    try {
      safeStorage.setItem("verticalia-huertas", JSON.stringify(huertas))
    } catch (e) {
      console.warn("[v0] Error saving gardens to storage", e)
    }
  }, [huertas, mounted])

  const [gaugeSize, setGaugeSize] = useState(100)
  useEffect(() => {
    if (!mounted) return

    function updateSize() {
      if (typeof window === "undefined") return
      try {
        const w = window.innerWidth
        if (w <= 360) setGaugeSize(80)
        else if (w <= 420) setGaugeSize(90)
        else if (w <= 600) setGaugeSize(100)
        else setGaugeSize(110)
      } catch (e) {
        console.warn("[v0] Error updating gauge size", e)
        setGaugeSize(100)
      }
    }
    updateSize()
    if (typeof window !== "undefined") {
      window.addEventListener("resize", updateSize)
      return () => window.removeEventListener("resize", updateSize)
    }
  }, [mounted])

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
    console.log(`Menu item clicked: ${item.label}`)
    setIsPanelOpen(false)
  }

  const markNotificationAsRead = (id) => {
    setNotifications(notifications.map((n) => (n.id === id ? { ...n, read: true } : n)))
  }

  const unreadCount = notifications.filter((n) => !n.read).length

  const navigateToAddGarden = () => {
    try {
      if (typeof window !== "undefined") {
        window.location.href = "/agregar-huerta"
      }
    } catch (e) {
      console.warn("[v0] Navigation error", e)
    }
  }

  if (!mounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 flex items-center justify-center">
        <div className="text-emerald-600">Cargando...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl"></div>
      </div>

      <AnimatePresence>
        {isPanelOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              onClick={() => setIsPanelOpen(false)}
            />

            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed left-0 top-0 bottom-0 w-4/5 max-w-[320px] sm:w-80 bg-white shadow-2xl z-50 overflow-y-auto"
            >
              <div className="bg-gradient-to-br from-emerald-600 via-emerald-600 to-teal-600 p-6 pb-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="text-white font-bold text-xl tracking-wide">VERTICALIA</div>
                  <button
                    onClick={() => setIsPanelOpen(false)}
                    className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                    aria-label="Cerrar menú"
                  >
                    <IconClose className="w-5 h-5 text-white" />
                  </button>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-emerald-700 font-bold text-xl shadow-lg">
                    M
                  </div>
                  <div>
                    <div className="text-white font-semibold text-base">Marcos</div>
                    <div className="text-emerald-100 text-sm">marcos@verticalia.com</div>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <nav className="space-y-1">
                  {menuItems.map((item, index) => (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      onClick={() => handleMenuItemClick(item)}
                      className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all active:scale-95 ${
                        item.danger ? "hover:bg-red-50 active:bg-red-100" : "hover:bg-emerald-50 active:bg-emerald-100"
                      }`}
                    >
                      <div
                        className={`p-2.5 rounded-lg ${
                          item.danger ? "bg-red-50 text-red-600" : "bg-emerald-50 text-emerald-600"
                        }`}
                      >
                        <item.icon className="w-5 h-5" />
                      </div>
                      <span className={`font-medium text-sm ${item.danger ? "text-red-600" : "text-gray-700"}`}>
                        {item.label}
                      </span>
                      <IconChevronRight className="w-4 h-4 ml-auto opacity-40" />
                    </motion.button>
                  ))}
                </nav>

                <div className="mt-8 pt-6 border-t border-gray-100">
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

        {showNotifications && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              onClick={() => setShowNotifications(false)}
            />

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-4 right-4 left-4 max-w-md mx-auto bg-white rounded-2xl shadow-2xl z-50 overflow-hidden"
            >
              <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <IconBell className="w-5 h-5 text-white" />
                    <h3 className="text-white font-bold">Notificaciones</h3>
                    {unreadCount > 0 && (
                      <span className="bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                        {unreadCount}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => setShowNotifications(false)}
                    className="p-1 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <IconClose className="w-5 h-5 text-white" />
                  </button>
                </div>
              </div>

              <div className="max-h-96 overflow-y-auto">
                {notifications.length === 0 ? (
                  <div className="p-8 text-center text-gray-400">
                    <IconBell className="w-12 h-12 mx-auto mb-2 opacity-30" />
                    <p>No tienes notificaciones</p>
                  </div>
                ) : (
                  <div className="divide-y divide-gray-100">
                    {notifications.map((notif) => (
                      <motion.div
                        key={notif.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className={`p-4 cursor-pointer transition-colors ${
                          notif.read ? "bg-white hover:bg-gray-50" : "bg-emerald-50/50 hover:bg-emerald-50"
                        }`}
                        onClick={() => markNotificationAsRead(notif.id)}
                      >
                        <div className="flex gap-3">
                          <div className="flex-shrink-0">
                            {!notif.read && <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2">
                              <h4 className={`text-sm font-semibold ${notif.read ? "text-gray-700" : "text-gray-900"}`}>
                                {notif.title}
                              </h4>
                              <span className="text-xs text-gray-400 whitespace-nowrap">{notif.time}</span>
                            </div>
                            <p className={`text-sm mt-1 ${notif.read ? "text-gray-500" : "text-gray-700"}`}>
                              {notif.message}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="w-full h-full relative z-10">
        <div className="bg-white min-h-screen">
          {/* Header mejorado */}
          <div className="bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-500 p-6 pb-8 pt-8">
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => setIsPanelOpen(true)}
                className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-all active:scale-95 backdrop-blur-sm"
                aria-label="Abrir menú"
              >
                <IconMenu className="w-6 h-6 text-white" />
              </button>

              <div className="flex-1 flex items-center justify-center">
                <Link href="/" className="inline-flex items-center">
                  <img src="/images/logo.png" alt="Verticalia Logo" className="h-18 w-auto object-contain" />
                </Link>
              </div>

              <div className="relative">
                <button
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 transition-all active:scale-95 backdrop-blur-sm relative"
                  aria-label="Notificaciones"
                >
                  <IconBell className="w-6 h-6 text-white" />
                  {unreadCount > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"
                    ></motion.span>
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-emerald-600 font-bold text-lg shadow-lg">
                M
              </div>
              <div>
                <div className="text-white/90 text-xs font-medium mb-1">Hola,</div>
                <div className="text-white font-bold text-lg">Marcos</div>
              </div>
            </div>
          </div>

          <div className="p-5 space-y-5">
            {/* Tarjeta de tiempo restante mejorada */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="relative overflow-hidden bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl p-5 shadow-md"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
              <div className="relative flex items-center justify-between gap-4">
                <div>
                  <div className="text-white/90 text-xs font-medium mb-1">Próximo riego</div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-white font-bold text-3xl">4</span>
                    <span className="text-white/90 text-sm">días</span>
                  </div>
                  <div className="text-white/70 text-xs mt-1">Estimado</div>
                </div>
                <div className="p-4 bg-white/20 backdrop-blur-sm rounded-2xl">
                  <IconWater className="w-8 h-8 text-white" />
                </div>
              </div>
            </motion.div>

            {/* Métricas mejoradas */}
            <div className="grid grid-cols-2 gap-3">
              {metrics.map((m, idx) => (
                <motion.div
                  key={m.id}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-gradient-to-br from-white to-gray-50/50 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  <CircularGauge
                    percent={m.percent}
                    size={gaugeSize}
                    stroke={Math.max(8, Math.round(gaugeSize * 0.08))}
                    color={m.color}
                    label={m.label}
                    valueLabel={m.valueLabel}
                    Icon={m.Icon}
                  />
                </motion.div>
              ))}
            </div>

            {/* Huertas mejoradas */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="text-lg font-bold text-gray-800">Mis Huertas</div>
                  <div className="text-xs text-gray-500">{huertas.length} activas</div>
                </div>
                <button
                  onClick={navigateToAddGarden}
                  className="h-11 w-11 bg-gradient-to-br from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white rounded-xl shadow-lg hover:shadow-xl flex items-center justify-center transition-all active:scale-95"
                  aria-label="Agregar huerta"
                >
                  <IconPlus className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-3">
                <div className="flex flex-col gap-2">
                  {huertas.map((h, idx) => (
                    <Link key={h.id} href={`/huerta/${h.id}`}>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="bg-white rounded-lg p-3 border border-emerald-100 flex items-center justify-between hover:bg-gray-50 transition-all cursor-pointer"
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
        </div>
      </div>
    </div>
  )
}
