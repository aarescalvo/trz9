'use client'

import { useAuth } from '@/components/providers/auth-provider'
import { EditableScreenWrapper } from '@/components/ui/editable-screen'
import C2RendimientoModule from '@/components/c2-rendimiento'

export default function Page() {
  const { operador } = useAuth()
  return (
    <EditableScreenWrapper moduloId="c2Rendimiento" operador={operador}>
      <C2RendimientoModule operador={operador} />
    </EditableScreenWrapper>
  )
}
