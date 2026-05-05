'use client'

import { useAuth } from '@/components/providers/auth-provider'
import { EditableScreenWrapper } from '@/components/ui/editable-screen'
import StockUnificada from '@/components/stock-unificada'

export default function Page() {
  const { operador } = useAuth()
  return (
    <EditableScreenWrapper moduloId="stockUnificada" operador={operador}>
      <StockUnificada operador={operador} />
    </EditableScreenWrapper>
  )
}
