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
                <img src={game.img} alt={game.name} />
                <h3>{game.name}</h3>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Home
