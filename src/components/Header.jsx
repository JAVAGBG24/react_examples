import Button from "./Button";
import "../styles/header.css";

// inuti {} är PROPS
const Header = ({ title, onNavigate }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <nav>
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
      </nav>
    </header>
  );
};

export default Header;
