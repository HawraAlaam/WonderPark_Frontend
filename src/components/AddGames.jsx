import { useNavigate } from "react-router-dom"

const GameForm = ({ addGame, newGame, handleChange }) => {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    addGame(e)
    navigate("/")
  }

  const game = { ...newGame }

  return (
    <div>
      <h1>Add A New Game</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={game.name}
          onChange={handleChange}
          name="name"
          placeholder="Name"
        />
        <input
          type="text"
          value={game.img}
          onChange={handleChange}
          name="img"
          placeholder="Image URL"
        />
        <textarea
          value={game.description}
          onChange={handleChange}
          name="description"
          placeholder="Description"
        />
        <select
          name="category"
          value={game.category}
          onChange={handleChange}>
            <option value="">Select Category</option>
              <option value="Adventure">Adventure</option>
              <option value="Action">Action</option>
              <option value="Puzzle">Puzzle</option>
              <option value="Sports">Sports</option>
              <option value="Simulation">Simulation</option>
            </select>

        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default GameForm
