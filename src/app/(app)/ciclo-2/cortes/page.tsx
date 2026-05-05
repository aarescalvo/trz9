'use client'

import { useAuth } from '@/components/providers/auth-provider'
import { EditableScreenWrapper } from '@/components/ui/editable-screen'
import { CortesDespostadaModule } from '@/components/cortes-despostada'

export default function Page() {
  const { operador } = useAuth()
  return (
    <EditableScreenWrapper moduloId="cortesDespostada" operador={operador}>
      <CortesDespostadaModule operador={operador} />
    </EditableScreenWrapper>
  )
}
