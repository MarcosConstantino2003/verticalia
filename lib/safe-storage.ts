/**
 * Safe localStorage wrapper that handles WebView restrictions
 * and provides fallbacks when localStorage is unavailable
 */

// In-memory fallback storage for when localStorage is unavailable
let memoryStorage: Record<string, string> = {}

let localStorageAvailable: boolean | null = null

/**
 * Check if localStorage is available and working
 */
function isLocalStorageAvailable(): boolean {
  if (localStorageAvailable !== null) {
    return localStorageAvailable
  }

  try {
    if (typeof window === "undefined" || !window.localStorage) {
      localStorageAvailable = false
      return false
    }
    const testKey = "__localStorage_test__"
    window.localStorage.setItem(testKey, "test")
    window.localStorage.removeItem(testKey)
    localStorageAvailable = true
    return true
  } catch (e) {
    console.warn("[v0] localStorage not available, using memory fallback", e)
    localStorageAvailable = false
    return false
  }
}

/**
 * Safely get an item from storage
 */
export function getItem(key: string): string | null {
  try {
    if (isLocalStorageAvailable()) {
      return window.localStorage.getItem(key)
    }
    return memoryStorage[key] || null
  } catch (e) {
    console.warn(`[v0] Error getting item from storage: ${key}`, e)
    return memoryStorage[key] || null
  }
}

/**
 * Safely set an item in storage
 */
export function setItem(key: string, value: string): boolean {
  try {
    if (isLocalStorageAvailable()) {
      window.localStorage.setItem(key, value)
      // Also save to memory as backup
      memoryStorage[key] = value
      return true
    }
    // Fallback to memory storage
    memoryStorage[key] = value
    return true
  } catch (e) {
    console.warn(`[v0] Error setting item in storage: ${key}`, e)
    // Last resort: memory storage
    memoryStorage[key] = value
    return false
  }
}

/**
 * Safely remove an item from storage
 */
export function removeItem(key: string): void {
  try {
    if (isLocalStorageAvailable()) {
      window.localStorage.removeItem(key)
    }
    delete memoryStorage[key]
  } catch (e) {
    console.warn(`[v0] Error removing item from storage: ${key}`, e)
    delete memoryStorage[key]
  }
}

/**
 * Clear all storage
 */
export function clear(): void {
  try {
    if (isLocalStorageAvailable()) {
      window.localStorage.clear()
    }
    memoryStorage = {}
  } catch (e) {
    console.warn("[v0] Error clearing storage", e)
    memoryStorage = {}
  }
}
