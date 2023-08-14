import { BrowserRouter } from 'react-router-dom'
import Header from './components/Header'
import { GlobalStyle, Container } from './styles'
import Rotas from './routs'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Container>
        <Header />
      </Container>
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
