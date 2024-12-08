import { Container } from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <Container>
    <p>{currentYear} - © Contador no DEVstart Todos os direitos reservados</p>
  </Container>
)
export default Footer
