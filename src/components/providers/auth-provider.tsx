'use client'

import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react'

// ============================================================
// AUTH PROVIDER — Gestiona sesión del operador
// Valida JWT cookie, refresh periódico, y visibility handler
// ============================================================

interface Operador {
  id: string
  nombre: string
  usuario: string
  rol: string
  nivel?: string
  email?: string
  permisos: {
    puedePesajeCamiones: boolean
    puedePesajeIndividual: boolean
    puedeMovimientoHacienda: boolean
    puedeListaFaena: boolean
    puedeIngresoCajon: boolean
    puedeRomaneo: boolean
    puedeMenudencias: boolean
    puedeStock: boolean
    puedeReportes: boolean
    puedeCCIR: boolean
    puedeFacturacion: boolean
    puedeConfiguracion: boolean
    puedeDesposte: boolean
    puedeCuarteo: boolean
    puedeEmpaque: boolean
    puedeExpedicionC2: boolean
    puedeCalidad: boolean
    puedeAutorizarReportes: boolean
  }
}

interface AuthContextValue {
  operador: Operador | null
  loading: boolean
  login: (body: { usuario?: string; password?: string; pin?: string }) => Promise<{ success: boolean; error?: string }>
  logout: () => Promise<void>
  refreshSession: () => Promise<boolean>
  hasPermission: (permiso: string | undefined) => boolean
  hasPermissionOr: (permiso: string | undefined, permisoAlt: string | undefined) => boolean
}

const AuthContext = createContext<AuthContextValue | null>(null)

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}

export type { Operador }

export function AuthProvider({ children }: { children: ReactNode }) {
  const [operador, setOperador] = useState<Operador | null>(null)
  const [loading, setLoading] = useState(true)

  // Validar sesión al montar + refresh periódico
  useEffect(() => {
    let refreshInterval: ReturnType<typeof setInterval> | null = null
    let mounted = true

    const validateSession = async () => {
      try {
        const res = await fetch('/api/auth')
        const data = await res.json()
        if (mounted && data.success && data.data) {
          setOperador(data.data)
        } else if (mounted && res.status === 401) {
          setOperador(null)
        }
      } catch {
        // Network error - don't logout
      }
      if (mounted) setLoading(false)
    }

    const refreshSessionPeriodic = async () => {
      try {
        const res = await fetch('/api/auth', { method: 'PATCH' })
        if (!mounted) return
        if (res.ok) {
          const data = await res.json()
          if (data.success && data.data) {
            setOperador(data.data)
          }
        }
      } catch {
        // Ignore
      }
    }

    validateSession()
    refreshInterval = setInterval(refreshSessionPeriodic, 10 * 60 * 1000)

    return () => {
      mounted = false
      if (refreshInterval) clearInterval(refreshInterval)
    }
  }, [])

  // Re-validar cuando el usuario vuelve a la pestaña
  useEffect(() => {
    let mounted = true

    const handleVisibility = async () => {
      if (document.visibilityState === 'visible' && operador) {
        try {
          const res = await fetch('/api/auth', { method: 'PATCH' })
          if (!mounted) return
          if (res.ok) {
            const data = await res.json()
            if (data.success && data.data) setOperador(data.data)
          } else if (res.status === 401) {
            // Retry once before forcing logout
            setTimeout(async () => {
              if (!mounted) return
              try {
                const retryRes = await fetch('/api/auth')
                if (!mounted) return
                if (retryRes.status === 401) setOperador(null)
              } catch { /* keep logged in */ }
            }, 3000)
          }
        } catch { /* keep logged in */ }
      }
    }

    document.addEventListener('visibilitychange', handleVisibility)
    return () => {
      mounted = false
      document.removeEventListener('visibilitychange', handleVisibility)
    }
  }, [operador])

  const login = useCallback(async (body: { usuario?: string; password?: string; pin?: string }) => {
    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      })
      const data = await res.json()
      if (data.success) {
        setOperador(data.data)
        return { success: true }
      }
      return { success: false, error: data.error || 'Error de autenticación' }
    } catch {
      return { success: false, error: 'Error de conexión' }
    }
  }, [])

  const logout = useCallback(async () => {
    try {
      await fetch('/api/auth', { method: 'DELETE' })
    } catch { /* ignore */ }
    setOperador(null)
  }, [])

  const refreshSession = useCallback(async () => {
    try {
      const res = await fetch('/api/auth', { method: 'PATCH' })
      if (res.ok) {
        const data = await res.json()
        if (data.success && data.data) {
          setOperador(data.data)
          return true
        }
      }
    } catch { /* ignore */ }
    return false
  }, [])

  const hasPermission = useCallback((permiso: string | undefined): boolean => {
    if (!permiso) return true
    if (operador?.rol === 'ADMINISTRADOR') return true
    return operador?.permisos[permiso as keyof typeof operador.permisos] === true
  }, [operador])

  const hasPermissionOr = useCallback((permiso: string | undefined, permisoAlt: string | undefined): boolean => {
    if (operador?.rol === 'ADMINISTRADOR') return true
    return hasPermission(permiso) || hasPermission(permisoAlt)
  }, [operador, hasPermission])

  return (
    <AuthContext.Provider value={{ operador, loading, login, logout, refreshSession, hasPermission, hasPermissionOr }}>
      {children}
    </AuthContext.Provider>
  )
}
