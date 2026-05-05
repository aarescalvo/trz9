'use client'

import { useAuth } from '@/components/providers/auth-provider'
import { EditableScreenWrapper } from '@/components/ui/editable-screen'
import { PreciosPage } from '@/modules/facturacion/components/PreciosPage'

export default function Page() {
  const { operador } = useAuth()
  return (
    <EditableScreenWrapper moduloId="precios" operador={operador}>
      <PreciosPage operador={operador} />
    </EditableScreenWrapper>
  )
}
