'use client'

import { useAuth } from '@/components/providers/auth-provider'
import { EditableScreenWrapper } from '@/components/ui/editable-screen'
import { RotulosMejorasModule } from '@/modules-pending/rotulos-mejoras'

export default function Page() {
  const { operador } = useAuth()
  return (
    <EditableScreenWrapper moduloId="rotulosMejoras" operador={operador}>
      <RotulosMejorasModule operador={operador} />
    </EditableScreenWrapper>
  )
}
