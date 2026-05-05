'use client'

import { useAuth } from '@/components/providers/auth-provider'
import { EditableScreenWrapper } from '@/components/ui/editable-screen'
import { ConfigListadoInsumosModule } from '@/components/config-listado-insumos'

export default function Page() {
  const { operador } = useAuth()
  return (
    <EditableScreenWrapper moduloId="configListadoInsumos" operador={operador}>
      <ConfigListadoInsumosModule operador={operador} />
    </EditableScreenWrapper>
  )
}
