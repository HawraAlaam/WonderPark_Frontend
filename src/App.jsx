import { useState } from "react"

import { Routes, Route } from "react-router-dom"

import gamesArray from "./data/games"

import Home from "./components/Home"
import Nav from "./components/Nav"
import GameDetails from "./components/GameDetails"
import AddGames from "./components/AddGames"
import About from "./components/About"

import "./App.css"

const App = () => {
  let emptyGame = {
    id: "",
    name: "",
    img: "",
    description: "",
    rating: "",
  }

  const [games, setGames] = useState(gamesArray)
  const [newGame, setNewGame] = useState(emptyGame)

  const addGame = (e) => {
    e.preventDefault()
    const currentGames = [...games]
    const createdGame = {
      ...newGame,
      id: parseInt(games.length + 1),
    }
    currentGames.push(createdGame)
    setGames(currentGames)
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
          <Route path="/" element={<Home games={games} />} />
          <Route path="/games/:id" element={<GameDetails games={games} setGames={setGames}/>} />
          <Route path="/about" element={<About/>}/>
          <Route
            path="/new"
            element={
              <AddGames
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
