'use client'

import { useAuth } from '@/components/providers/auth-provider'
import { EditableScreenWrapper } from '@/components/ui/editable-screen'
import { AuditoriaOperadorModule } from '@/modules-pending/auditoria-operador'

export default function Page() {
  const { operador } = useAuth()
  return (
    <EditableScreenWrapper moduloId="auditoriaOperador" operador={operador}>
      <AuditoriaOperadorModule operador={operador} />
    </EditableScreenWrapper>
  )
}
