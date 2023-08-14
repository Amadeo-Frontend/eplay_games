import {
  Container,
  FooterSection,
  Links,
  SectionTitle,
  Link,
  Copyright
} from './styles'

const currentYear = new Date().getFullYear()
const footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitle>Categorias</SectionTitle>
        <Links>
          <li>
            <Link>RPG</Link>
          </li>
          <li>
            <Link>Ação</Link>
          </li>
          <li>
            <Link>Simulação</Link>
          </li>
          <li>
            <Link>FPS</Link>
          </li>
          <li>
            <Link>Estratégia</Link>
          </li>
          <li>
            <Link>Aventura</Link>
          </li>
          <li>
            <Link>Esportes</Link>
          </li>
        </Links>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Acesso Rápido</SectionTitle>
        <Links>
          <li>
            <Link>Novidades</Link>
          </li>
          <li>
            <Link>Promoções</Link>
          </li>
          <li>
            <Link>Em Breve</Link>
          </li>
        </Links>
      </FooterSection>
      <Copyright>
        {currentYear} - © E-PLAY Todos os direitos reservados
      </Copyright>
    </div>
  </Container>
)

export default footer
