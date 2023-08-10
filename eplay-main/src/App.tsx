import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Banner from './components/Banner'
import Header from './components/Header'
import { GlobalStyle, Container } from './styles'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Banner />
  }
])

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Header />
      </Container>
      <RouterProvider router={router} />
    </>
  )
}

export default App
