'use client'

import { useAuth } from '@/components/providers/auth-provider'
import { EditableScreenWrapper } from '@/components/ui/editable-screen'
import { FacturacionModule } from '@/components/facturacion'

export default function Page() {
  const { operador } = useAuth()
  return (
    <EditableScreenWrapper moduloId="facturacion" operador={operador}>
      <FacturacionModule operador={operador} />
    </EditableScreenWrapper>
  )
}
