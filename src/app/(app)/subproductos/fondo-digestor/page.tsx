'use client'

import { useAuth } from '@/components/providers/auth-provider'
import { EditableScreenWrapper } from '@/components/ui/editable-screen'
import { RenderingModule } from '@/components/rendering'

export default function Page() {
  const { operador } = useAuth()
  return (
    <EditableScreenWrapper moduloId="fondoDigestor" operador={operador}>
      <RenderingModule operador={operador} tipoInicial="FONDO_DIGESTOR" />
    </EditableScreenWrapper>
  )
}
