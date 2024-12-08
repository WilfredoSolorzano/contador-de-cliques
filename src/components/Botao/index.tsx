import React from 'react'
import { ButtonIncrementa, ButtonZerar } from './styles'

type Props = {
  type: 'button'
  onClick?: () => void
  children: React.ReactNode
  variant?: 'incrementa' | 'zerar'
}

const Botao = ({ type, onClick, children, variant }: Props) => {
  if (variant === 'incrementa') {
    return (
      <ButtonIncrementa as="button" type={type} onClick={onClick}>
        {children}
      </ButtonIncrementa>
    )
  }

  if (variant === 'zerar') {
    return (
      <ButtonZerar as="button" type={type} onClick={onClick}>
        {children}
      </ButtonZerar>
    )
  }

  return null
}

export default Botao
