import { Link } from "react-router-dom"

const Home = ({ games }) => {
  return (
    <>
      <div className="home">
        <h1>Games</h1>
        <div>
          {games.map((game) => (
            <div key={game.id}>
              <Link to={`/games/${game.id}`}>
                <img src={game.image} alt={game.name} />
                <h3>{game.name}</h3>
                <p>Rating: {game.rating || "No rating yet"}</p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Home
