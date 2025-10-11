// Utility to detect if the app is running in a WebView
export function isWebView(): boolean {
  if (typeof window === "undefined") return false

  try {
    const userAgent = window.navigator.userAgent.toLowerCase()
    const isAndroidWebView = /wv|webview/.test(userAgent) && /android/.test(userAgent)
    const isIOSWebView = /(iphone|ipod|ipad).*applewebkit(?!.*safari)/i.test(userAgent)

    return isAndroidWebView || isIOSWebView
  } catch (e) {
    console.warn("[v0] Error detecting WebView", e)
    return false
  }
}

export function isBrowser(): boolean {
  return typeof window !== "undefined"
}
