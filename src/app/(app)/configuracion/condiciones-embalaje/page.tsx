'use client'

import { useAuth } from '@/components/providers/auth-provider'
import { EditableScreenWrapper } from '@/components/ui/editable-screen'
import { ConfigCondicionesEmbalajeModule } from '@/components/config-condiciones-embalaje'

export default function Page() {
  const { operador } = useAuth()
  return (
    <EditableScreenWrapper moduloId="configCondicionesEmbalaje" operador={operador}>
      <ConfigCondicionesEmbalajeModule operador={operador} />
    </EditableScreenWrapper>
  )
}
