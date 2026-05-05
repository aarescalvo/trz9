'use client'

import { useAuth } from '@/components/providers/auth-provider'
import { EditableScreenWrapper } from '@/components/ui/editable-screen'
import { ConfigUsuariosModule } from '@/components/config-usuarios'

export default function Page() {
  const { operador } = useAuth()
  return (
    <EditableScreenWrapper moduloId="configUsuarios" operador={operador}>
      <ConfigUsuariosModule operador={operador} />
    </EditableScreenWrapper>
  )
}
