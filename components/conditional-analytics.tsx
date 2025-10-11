"use client"

import { Analytics } from "@vercel/analytics/next"
import { useEffect, useState } from "react"
import { isWebView } from "@/lib/webview-detection"

export function ConditionalAnalytics() {
  const [shouldRender, setShouldRender] = useState(false)

  useEffect(() => {
    // Only render Analytics if NOT in a WebView
    setShouldRender(!isWebView())
  }, [])

  if (!shouldRender) {
    return null
  }

  return <Analytics />
}
