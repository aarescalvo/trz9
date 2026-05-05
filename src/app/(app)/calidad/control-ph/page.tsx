'use client'

import { useAuth } from '@/components/providers/auth-provider'
import { EditableScreenWrapper } from '@/components/ui/editable-screen'
import CalidadPHModule from '@/components/calidad-ph'

export default function Page() {
  const { operador } = useAuth()
  return (
    <EditableScreenWrapper moduloId="calidadPh" operador={operador}>
      <CalidadPHModule operador={operador} />
    </EditableScreenWrapper>
  )
}
