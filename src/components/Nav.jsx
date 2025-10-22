import { NavLink } from "react-router-dom"
const Nav = () => {
  return (
    <nav className="navbar">
      <h4>Wonder Park</h4>
      <div>
        <NavLink to="/games">Home</NavLink>
        <NavLink to="/new">Add Game</NavLink>
        <NavLink to="/about">About</NavLink>
      </div>
    </nav>
  )
}

export default Nav
