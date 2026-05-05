'use client'

import { useAuth } from '@/components/providers/auth-provider'
import { EditableScreenWrapper } from '@/components/ui/editable-screen'
import C2PalletsModule from '@/components/c2-pallets'

export default function Page() {
  const { operador } = useAuth()
  return (
    <EditableScreenWrapper moduloId="c2Pallets" operador={operador}>
      <C2PalletsModule operador={operador} />
    </EditableScreenWrapper>
  )
}
