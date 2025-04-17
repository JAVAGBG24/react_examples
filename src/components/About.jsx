import Button from "./Button";
import Footer from "./Footer";
import "../styles/about.css";

const About = ({ onNavigate }) => {
  return (
    <div className="about">
      <main className="content">
        <h2>About Page</h2>
        <p>This demo shows basic React components</p>

        <div className="button-container">
          <Button
            text="Go back"
            backgroundColor="limegreen"
            onClick={() => onNavigate("home")}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
