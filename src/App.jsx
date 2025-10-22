import { useState } from "react"
import { Routes, Route } from "react-router-dom"

import Home from "./components/Home"
import Nav from "./components/Nav"
import GameDetails from "./components/GameDetails"
import AddGames from "./components/AddGames"
import About from "./components/About"

import "./App.css"

const App = () => {
  const emptyGame = {
    id: "",
    name: "",
    img: "",
    description: "",
    category: "",
    rating: "",
  }

  const [games, setGames] = useState([])
  const [newGame, setNewGame] = useState(emptyGame)

  const addGame = (e) => {
    e.preventDefault()
    const createdGame = {
      ...newGame,
      id: games.length + 1,
    }
    setGames([...games, createdGame])
    setNewGame(emptyGame)
  }

  const handleChange = (e) => {
    setNewGame({ ...newGame, [e.target.name]: e.target.value })
  }

  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <Routes>
          {/* <Route path="/" element={<Home />}/> */}
          <Route
            path="/games"
            element={<Home games={games} setGames={setGames} />}
          />
          <Route
            path="/games/:id"
            element={<GameDetails games={games} setGames={setGames} />}
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/new"
            element={
              <AddGames
                games={games}
                setGames={setGames}
                newGame={newGame}
                handleChange={handleChange}
                addGame={addGame}
              />
            }
          />
        </Routes>
      </main>
    </>
  )
}

export default App
