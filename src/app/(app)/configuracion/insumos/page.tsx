'use client'

import { useAuth } from '@/components/providers/auth-provider'
import { EditableScreenWrapper } from '@/components/ui/editable-screen'
import { ConfigInsumosModule } from '@/components/config-insumos'

export default function Page() {
  const { operador } = useAuth()
  return (
    <EditableScreenWrapper moduloId="configInsumos" operador={operador}>
      <ConfigInsumosModule operador={operador} />
    </EditableScreenWrapper>
  )
}
