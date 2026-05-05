'use client'

import { useAuth } from '@/components/providers/auth-provider'
import { EditableScreenWrapper } from '@/components/ui/editable-screen'
import { MovimientosDespostadaModule } from '@/components/movimientos-despostada'

export default function Page() {
  const { operador } = useAuth()
  return (
    <EditableScreenWrapper moduloId="movimientosDespostada" operador={operador}>
      <MovimientosDespostadaModule operador={operador} />
    </EditableScreenWrapper>
  )
}
