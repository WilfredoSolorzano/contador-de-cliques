import styled from 'styled-components'
import { varCor } from '../../styles'

export const ButtonIncrementa = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  color: ${varCor.branco};
  background-color: ${varCor.verde};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${varCor.azul};
  }

  &:active {
    transform: scale(0.98);
  }
`
export const ButtonZerar = styled.button`
  padding: 10px 20px;
  margin-top: 20px;
  font-size: 1rem;
  color: ${varCor.branco};
  background-color: ${varCor.vermelho};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${varCor.escuroV};
  }

  &:active {
    transform: scale(0.98);
  }
`
