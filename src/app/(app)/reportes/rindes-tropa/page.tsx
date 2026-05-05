'use client'

import { useAuth } from '@/components/providers/auth-provider'
import { EditableScreenWrapper } from '@/components/ui/editable-screen'
import RindesTropaModule from '@/components/rindes-tropa'

export default function Page() {
  const { operador } = useAuth()
  return (
    <EditableScreenWrapper moduloId="rindesTropa" operador={operador}>
      <RindesTropaModule operador={operador} />
    </EditableScreenWrapper>
  )
}
