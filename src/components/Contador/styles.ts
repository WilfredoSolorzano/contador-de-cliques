import styled from 'styled-components'
import { varCor } from '../../styles'

export const Container = styled.div`
  max-width: 850px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${varCor.branco};
  height: 100%;
  margin: 0 auto;
  padding: 45px 45px;

  div {
    max-width: 292px;
    margin-right: 45px;
  }
`

export const ContadorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border: 2px solid ${varCor.borderC};
  border-radius: 10px;
  background-color: ${varCor.branco};
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 300px;
  width: 90%;

  h1 {
    font-size: 1.5rem;
    color: ${varCor.preto};
    margin-bottom: 20px;
  }
`
