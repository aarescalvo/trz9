'use client'

import { useAuth } from '@/components/providers/auth-provider'
import { EditableScreenWrapper } from '@/components/ui/editable-screen'
import { IngresoCajonModule } from '@/components/ingreso-cajon'

export default function Page() {
  const { operador } = useAuth()
  return (
    <EditableScreenWrapper moduloId="ingresoCajon" operador={operador}>
      <IngresoCajonModule operador={operador} />
    </EditableScreenWrapper>
  )
}
