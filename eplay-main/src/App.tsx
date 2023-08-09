import Banner from './components/Banner'
import Header from './components/Header'
import { GlobalStyle, Container } from './styles'

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
      </Container>
      <Banner />
    </>
  )
}

export default App
