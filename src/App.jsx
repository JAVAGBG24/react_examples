import Home from "./components/Home";
import Header from "./components/Header";
import About from "./components/About";
import { useState } from "react";

// Home page
// About page
// Button
// Header
// Footer

function App() {
  // STATE
  const [currentPage, setCurrentPage] = useState("home");
  // currentPage = getter
  // setCurrentPage = setter
  // ett state för vilken sida vi ska visa home eller about

  // vi ska ha en metod som definierar vad onNavigate ska göra
  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  /* function formatMoney(number) {
    return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  } */

  return (
    <div className="layout">
      <Header title="Our React App" onNavigate={handleNavigate} />

      {currentPage === "home" ? (
        <Home />
      ) : (
        <About onNavigate={handleNavigate} />
      )}
    </div>
  );
}

export default App;
