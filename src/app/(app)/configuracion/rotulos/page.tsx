'use client'

import { useAuth } from '@/components/providers/auth-provider'
import { EditableScreenWrapper } from '@/components/ui/editable-screen'
import { ConfigRotulosModule } from '@/components/config-rotulos'

export default function Page() {
  const { operador } = useAuth()
  return (
    <EditableScreenWrapper moduloId="configRotulos" operador={operador}>
      <ConfigRotulosModule operador={operador} />
    </EditableScreenWrapper>
  )
}
