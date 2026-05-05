'use client'

import { useAuth } from '@/components/providers/auth-provider'
import { EditableScreenWrapper } from '@/components/ui/editable-screen'
import { ConfigBalanzasModule } from '@/components/config-balanzas'

export default function Page() {
  const { operador } = useAuth()
  return (
    <EditableScreenWrapper moduloId="configBalanzas" operador={operador}>
      <ConfigBalanzasModule operador={operador} />
    </EditableScreenWrapper>
  )
}
