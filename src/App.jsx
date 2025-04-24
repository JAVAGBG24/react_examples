import { useState, useEffect } from "react";
import "./styles/arrays.css";

function App() {
  const [userData, setUserData] = useState([]);
  const [showMil, setShowMil] = useState(false);
  const [totalWealth, setTotalWealth] = useState(null);

  useEffect(() => {
    fetchRandomUser(3);
  }, []);

  const fetchRandomUser = async (count = 1) => {
    try {
      const res = await fetch(`https://randomuser.me/api/?results=${count}`);
      const data = await res.json();

      const newUsers = data.results.map((user) => ({
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() * 1000000),
      }));

      if (count === 1) {
        // om vi bara hämtar en användare (från knappen)
        setUserData((prevUsers) => [...prevUsers, newUsers[0]]);
      } else {
        // om vi hämtar flera användare, kan styra antalet
        setUserData(newUsers);
      }
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  const doubleMoney = () => {
    setUserData((prevUser) =>
      prevUser.map((user) => ({
        ...user,
        money: user.money * 2,
      }))
    );
  };

  function sortByRichest() {
    setUserData((prevUsers) =>
      [...prevUsers].sort((a, b) => b.money - a.money)
    );
  }

  const showMillionaires = () => {
    setShowMil(!showMil);
  };

  function calculateWealth() {
    const wealth = userData.reduce((acc, user) => acc + user.money, 0);
    setTotalWealth(wealth);
  }

  const displayedUsers = showMil
    ? userData.filter((user) => user.money > 1000000)
    : userData;

  function formatMoney(number) {
    return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  }

  return (
    <div className="app">
      <h1>DOM Array Methods</h1>
      <div className="container">
        <aside>
          <button onClick={() => fetchRandomUser(1)}>👤 Add User</button>
          <button onClick={doubleMoney}>💵 Double Money</button>
          <button onClick={showMillionaires}>
            💰 {showMil ? "Show All" : "Show Only Millionaires"}
          </button>
          <button onClick={sortByRichest}>⬇️ Sort by Richest</button>
          <button onClick={calculateWealth}>🧮 Calculate entire Wealth</button>
        </aside>

        <main>
          <h2>
            <strong>Person</strong> Wealth
          </h2>
          {displayedUsers.map((person, index) => (
            <div key={index} className="person">
              <strong>{person.name}</strong> {formatMoney(person.money)}
            </div>
          ))}

          {totalWealth !== null && (
            <div className="total-wealth">
              <h3>
                Total wealth: <strong>{formatMoney(totalWealth)}</strong>
              </h3>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

export default App;

/* 
DEMO 1
import Home from "./components/first_demo/Home";
import Header from "./components/first_demo/Header";
import About from "./components/first_demo/About";
import Footer from "./components/first_demo/Footer";
import AboutPage from "./components/first_demo/AboutPage";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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

   function formatMoney(number) {
    return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  } 

  return (
    <BrowserRouter>
      <div className="layout">
        <Header title="Our React App" onNavigate={handleNavigate} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/:pageId" element={<AboutPage />} />
        </Routes>
         {currentPage === "home" ? (
        <Home />
      ) : (
        <About onNavigate={handleNavigate} />
      )} 
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
 */
