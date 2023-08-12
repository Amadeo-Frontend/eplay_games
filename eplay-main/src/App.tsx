import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Banner from './components/Banner'
import Header from './components/Header'
import { GlobalStyle, Container } from './styles'
import ProductsList from './components/ProductsList'

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Banner />
        <ProductsList title="Pomoções" background="gray" />
        <ProductsList title="Em breve" background="black" />
      </>
    )
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
