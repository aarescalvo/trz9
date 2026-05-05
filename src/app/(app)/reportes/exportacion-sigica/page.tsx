'use client'

import { useAuth } from '@/components/providers/auth-provider'
import { EditableScreenWrapper } from '@/components/ui/editable-screen'
import { ExportacionSIGICAModule } from '@/components/exportacion-sigica'

export default function Page() {
  const { operador } = useAuth()
  return (
    <EditableScreenWrapper moduloId="exportacionSIGICA" operador={operador}>
      <ExportacionSIGICAModule operador={operador} />
    </EditableScreenWrapper>
  )
}
