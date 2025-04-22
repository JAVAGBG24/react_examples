import Button from "./Button";
import Footer from "./Footer";
import "../styles/home.css";

const Home = () => {
  return (
    <div className="home">
      <main className="content">
        <h2>Home Page</h2>
        <p>This is a simple React App demo.</p>

        <div className="button-container">
          <Button
            text="Click me!"
            backgroundColor="tomato"
            onClick={() => alert("Button clicked!")}
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
