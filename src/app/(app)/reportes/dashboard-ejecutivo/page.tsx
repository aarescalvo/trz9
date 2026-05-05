'use client'

import { useAuth } from '@/components/providers/auth-provider'
import { EditableScreenWrapper } from '@/components/ui/editable-screen'
import { DashboardEjecutivoModule } from '@/modules-pending/dashboard-ejecutivo'

export default function Page() {
  const { operador } = useAuth()
  return (
    <EditableScreenWrapper moduloId="dashboardEjecutivo" operador={operador}>
      <DashboardEjecutivoModule operador={operador} />
    </EditableScreenWrapper>
  )
}
