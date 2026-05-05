'use client'

import { useAuth } from '@/components/providers/auth-provider'
import { EditableScreenWrapper } from '@/components/ui/editable-screen'
import { ListaFaenaModule } from '@/components/lista-faena'

export default function Page() {
  const { operador } = useAuth()
  return (
    <EditableScreenWrapper moduloId="listaFaena" operador={operador}>
      <ListaFaenaModule operador={operador} />
    </EditableScreenWrapper>
  )
}
