import Button from "./Button";
import "../styles/header.css";
import { Link } from "react-router-dom";

// inuti {} är PROPS
const Header = ({ title, onNavigate }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <nav>
        <Link to="/" className="link">
          <Button text="Home" backgroundColor="green" />
        </Link>

        <Link to="/about" className="link">
          <Button text="About" backgroundColor="blue" />
        </Link>
      </nav>
    </header>
  );
};

export default Header;

/*
 <Button
          text="Home"
          backgroundColor="green"
          onClick={() => onNavigate("home")}
        />
        <Button
          text="About"
          backgroundColor="blue"
          onClick={() => onNavigate("about")}
        />
*/
