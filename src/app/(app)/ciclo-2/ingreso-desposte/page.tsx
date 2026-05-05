'use client'

import { useAuth } from '@/components/providers/auth-provider'
import { EditableScreenWrapper } from '@/components/ui/editable-screen'
import IngresoDesposteUnificado from '@/components/ingreso-desposte-unificado'

export default function Page() {
  const { operador } = useAuth()
  return (
    <EditableScreenWrapper moduloId="ingresoDesposteUnificado" operador={operador}>
      <IngresoDesposteUnificado operador={operador} />
    </EditableScreenWrapper>
  )
}
