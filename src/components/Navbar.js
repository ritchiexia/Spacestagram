import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <nav>
      <ul className="navbar">
        <button className="navlink" onClick={() => {
          navigate("/")
          window.location.reload(false)
        }}>Recent</button>
        <button className="navlink" onClick={() => {
          navigate("/random")
          window.location.reload(false)
        }}>Random</button>
      </ul>
    </nav>
  )
}

export default Navbar
