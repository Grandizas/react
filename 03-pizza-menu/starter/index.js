import react from "react";
import reactDOM from "react-dom/client";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Welcome to React</h1>
      </header>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
reactDOM.render(<App />);
