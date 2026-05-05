'use client'

import { useAuth } from '@/components/providers/auth-provider'
import { EditableScreenWrapper } from '@/components/ui/editable-screen'
import { MenudenciasModule } from '@/components/menudencias'

export default function Page() {
  const { operador } = useAuth()
  return (
    <EditableScreenWrapper moduloId="menudencias" operador={operador}>
      <MenudenciasModule operador={operador} />
    </EditableScreenWrapper>
  )
}
