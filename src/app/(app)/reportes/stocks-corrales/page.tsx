'use client'

import { useAuth } from '@/components/providers/auth-provider'
import { EditableScreenWrapper } from '@/components/ui/editable-screen'
import { StocksCorralesModule } from '@/components/stocks-corrales'

export default function Page() {
  const { operador } = useAuth()
  return (
    <EditableScreenWrapper moduloId="stocksCorrales" operador={operador}>
      <StocksCorralesModule operador={operador} />
    </EditableScreenWrapper>
  )
}
