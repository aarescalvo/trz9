'use client'

import { useAuth } from '@/components/providers/auth-provider'
import { EditableScreenWrapper } from '@/components/ui/editable-screen'
import ProduccionUnificada from '@/components/produccion-unificada'

export default function Page() {
  const { operador } = useAuth()
  return (
    <EditableScreenWrapper moduloId="produccionUnificada" operador={operador}>
      <ProduccionUnificada operador={operador} />
    </EditableScreenWrapper>
  )
}
