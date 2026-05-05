'use client'

import { useAuth } from '@/components/providers/auth-provider'
import { EditableScreenWrapper } from '@/components/ui/editable-screen'
import { DespachosModule } from '@/components/despachos'

export default function Page() {
  const { operador } = useAuth()
  return (
    <EditableScreenWrapper moduloId="despachos" operador={operador}>
      <DespachosModule operador={operador} />
    </EditableScreenWrapper>
  )
}
