'use client'

import { useAuth } from '@/components/providers/auth-provider'
import { EditableScreenWrapper } from '@/components/ui/editable-screen'
import { PesajeCamionesModule } from '@/components/pesaje-camiones-module'

export default function Page() {
  const { operador } = useAuth()
  return (
    <EditableScreenWrapper moduloId="pesajeCamiones" operador={operador}>
      <PesajeCamionesModule operador={operador} />
    </EditableScreenWrapper>
  )
}
