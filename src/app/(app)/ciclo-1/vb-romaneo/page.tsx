'use client'

import { useAuth } from '@/components/providers/auth-provider'
import { EditableScreenWrapper } from '@/components/ui/editable-screen'
import { VBRomaneoModule } from '@/components/vb-romaneo'

export default function Page() {
  const { operador } = useAuth()
  return (
    <EditableScreenWrapper moduloId="vbRomaneo" operador={operador}>
      <VBRomaneoModule operador={operador} />
    </EditableScreenWrapper>
  )
}
