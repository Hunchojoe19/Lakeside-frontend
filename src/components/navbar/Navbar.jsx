import { useNavigate } from "react-router-dom"
import "./navbar.css"
// import logo from '../../assets/images/logo.png'

const Navbar = () => {

  const navigate = useNavigate()

  return (
    <div className="navbar">
      <div className="navContainer">
        {/* <img src={ logo }/> */}
        <span className="logo">Lakeside Views</span>
        <div className="navItems">
          <button className="navButton" onClick={() => navigate('/register')}>Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar