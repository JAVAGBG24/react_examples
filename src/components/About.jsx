import Button from "./Button";
import Footer from "./Footer";
import "../styles/about.css";
import { Link } from "react-router-dom";

const About = ({ onNavigate }) => {
  return (
    <div className="about">
      <main className="content">
        <h2>About Page</h2>
        <p>This demo shows basic React components</p>

        <div className="button-container">
          <Link to="/" className="link">
            <Button text="Go back" backgroundColor="limegreen" />
          </Link>
        </div>
      </main>
    </div>
  );
};

export default About;
