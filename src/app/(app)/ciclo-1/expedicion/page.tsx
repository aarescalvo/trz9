'use client'

import { useAuth } from '@/components/providers/auth-provider'
import { EditableScreenWrapper } from '@/components/ui/editable-screen'
import ExpedicionUnificada from '@/components/expedicion-unificada'

export default function Page() {
  const { operador } = useAuth()
  return (
    <EditableScreenWrapper moduloId="expedicionUnificada" operador={operador}>
      <ExpedicionUnificada operador={operador} />
    </EditableScreenWrapper>
  )
}
