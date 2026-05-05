'use client'

import { useAuth } from '@/components/providers/auth-provider'
import { EditableScreenWrapper } from '@/components/ui/editable-screen'
import { ReportesSIGICAModule } from '@/components/reportes-sigica'

export default function Page() {
  const { operador } = useAuth()
  return (
    <EditableScreenWrapper moduloId="reportesSIGICA" operador={operador}>
      <ReportesSIGICAModule operador={operador} />
    </EditableScreenWrapper>
  )
}
