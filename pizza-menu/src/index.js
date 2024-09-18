import React from "react";
import ReactDOM from "react-dom/client";
import pizzaData from "./data";

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return <h1>Fast React Pizza co.</h1>;
}

function Menu() {
  return (
    <div>
      <h1>Our menu</h1>

      {pizzaData.map((pizza) => (
        <Pizza key={pizza.name} pizza={pizza} />
      ))}
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 9;
  const closeHour = 21;

  if (hour >= openHour && hour < closeHour) {
    alert("Welcome to Fast React Pizza co.! We're open from 9 AM to 9 PM.");
  } else {
    alert("Sorry, we're closed at the moment. Please come back later.");
  }

  return (
    <footer>{new Date().toLocaleTimeString()} We're currently open!</footer>
  );
}

function Pizza({ pizza }) {
  return (
    <div>
      <img src={pizza.photoName} alt={pizza.name} />
      <h3>{pizza.name}</h3>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
