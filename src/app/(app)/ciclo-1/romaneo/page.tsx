'use client'

import { useAuth } from '@/components/providers/auth-provider'
import { EditableScreenWrapper } from '@/components/ui/editable-screen'
import { RomaneoModule } from '@/components/romaneo'

export default function Page() {
  const { operador } = useAuth()
  return (
    <EditableScreenWrapper moduloId="romaneo" operador={operador}>
      <RomaneoModule operador={operador} />
    </EditableScreenWrapper>
  )
}
