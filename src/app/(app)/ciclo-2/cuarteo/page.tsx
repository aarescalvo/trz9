'use client'

import { useAuth } from '@/components/providers/auth-provider'
import { EditableScreenWrapper } from '@/components/ui/editable-screen'
import { CuarteoModule } from '@/components/cuarteo'

export default function Page() {
  const { operador } = useAuth()
  return (
    <EditableScreenWrapper moduloId="cuarteo" operador={operador}>
      <CuarteoModule operador={operador} />
    </EditableScreenWrapper>
  )
}
