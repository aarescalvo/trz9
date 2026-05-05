'use client'

import { useAuth } from '@/components/providers/auth-provider'
import { EditableScreenWrapper } from '@/components/ui/editable-screen'
import { ControlVencimientosModule } from '@/modules-pending/control-vencimientos'

export default function Page() {
  const { operador } = useAuth()
  return (
    <EditableScreenWrapper moduloId="controlVencimientos" operador={operador}>
      <ControlVencimientosModule operador={operador} />
    </EditableScreenWrapper>
  )
}
