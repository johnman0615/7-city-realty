import { Link } from "react-router-dom";
import "../styles/navbar.css";

function NavbarComponent() {
  return (
    <nav>
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/agents">Agents</Link></li>
      </ul>
    </nav>
  );
}

export default NavbarComponent;
