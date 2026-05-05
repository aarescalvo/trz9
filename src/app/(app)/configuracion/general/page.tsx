'use client'

import { useAuth } from '@/components/providers/auth-provider'
import { ConfiguracionModule } from '@/components/configuracion'

export default function Page() {
  const { operador } = useAuth()
  return <ConfiguracionModule operador={operador} />
}
