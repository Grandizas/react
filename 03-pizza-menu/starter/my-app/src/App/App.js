import './App.css';
import pizzaData from '../common/data';

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Company</h1>
    </header>
  )
}

function Body() {
  return (
    <main className="container">
      <div className="menu">
        <h2>Our menu</h2>

        {/* Pizza list */}
        <ul className="pizzas">
          {pizzaData.map((pizza) => <Pizza pizza={pizza} />)}
        </ul>
      </div>
    </main>
  );
}

function Pizza(props) {
  const { name, ingredients, price, photoName, soldOut } = props.pizza;

  return (
    <li className="pizza" key={name}>
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? 'Sold out' : price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return <footer className="footer">
    {isOpen ? <p>Open at 12:00 AM</p> : <p> Closed at 12:00 PM</p>}
  </footer>;
}

export default App;
