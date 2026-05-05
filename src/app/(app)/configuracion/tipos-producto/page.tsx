'use client'

import { useAuth } from '@/components/providers/auth-provider'
import { EditableScreenWrapper } from '@/components/ui/editable-screen'
import { ConfigTiposProductoModule } from '@/components/config-tipos-producto'

export default function Page() {
  const { operador } = useAuth()
  return (
    <EditableScreenWrapper moduloId="configTiposProducto" operador={operador}>
      <ConfigTiposProductoModule operador={operador} />
    </EditableScreenWrapper>
  )
}
