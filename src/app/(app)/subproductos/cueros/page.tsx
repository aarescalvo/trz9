'use client'

import { useAuth } from '@/components/providers/auth-provider'
import { EditableScreenWrapper } from '@/components/ui/editable-screen'
import { CuerosModule } from '@/components/cueros'

export default function Page() {
  const { operador } = useAuth()
  return (
    <EditableScreenWrapper moduloId="cueros" operador={operador}>
      <CuerosModule operador={operador} />
    </EditableScreenWrapper>
  )
}
