import { Link,NavLink } from "react-router-dom";


function Header() {
  return(
    <header className="navbar bg-dark justify-content-around ">
      <h1 className="nav-brand text-light">Mustafa</h1>
    <ul className="nav justify-content-between">
      <li className=" nav-item "><NavLink className="nav-link  text-light" to="/">Home</NavLink></li>
      <li className="nav-item "><NavLink className="nav-link  text-light" to="/products">products</NavLink></li>
      <li className="nav-item"><NavLink className="nav-link  text-light" to="/about">about</NavLink></li>
    </ul>
    </header>
  )
}

export default Header;