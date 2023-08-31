import { Game } from '../Home'
import { useEffect, useState } from 'react'
import ProductsList from '../../components/ProductsList'

const Categories = () => {
  const [actionGames, setActionGames] = useState<Game[]>([])
  const [sportsGames, setSportsGames] = useState<Game[]>([])
  const [simulationGames, setSimulationGames] = useState<Game[]>([])
  const [fightGames, setfightGames] = useState<Game[]>([])
  const [rpgGames, setRpgGames] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
      .then((response) => response.json())
      .then((data) => setActionGames(data))

    fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
      .then((response) => response.json())
      .then((data) => setSportsGames(data))

    fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
      .then((response) => response.json())
      .then((data) => setSimulationGames(data))

    fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
      .then((response) => response.json())
      .then((data) => setfightGames(data))

    fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
      .then((response) => response.json())
      .then((data) => setRpgGames(data))
  }, [])
  return (
    <>
      <ProductsList games={rpgGames} title="RPG" background="black" />
      <ProductsList
        games={simulationGames}
        title="Simulação"
        background="gray"
      />
      <ProductsList games={fightGames} title="Luta" background="black" />
      <ProductsList games={sportsGames} title="Esportes" background="gray" />
      <ProductsList games={actionGames} title="Ação" background="black" />
    </>
  )
}

export default Categories
