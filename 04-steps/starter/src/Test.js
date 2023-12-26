import "./styles.css";
import { useState } from "react";

export default function App() {
  const [amount, setAmount] = useState(1);
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Steps
        amount={amount}
        add={() => setAmount(amount => amount + 1)}
        reduce={() => setAmount(amount => amount - 1)}
      />

      <Count
        count={count}
        add={() => setCount(count => count + amount)}
        reduce={() => setCount(count => count - amount)}
      />

      <TheDate count={count} />
    </div>
  );
}

function Steps(props) {

  return (
    <div className="steps">
      <button onClick={props.reduce}> - </button>
      <div>Step {props.amount}</div>
      <button onClick={props.add}> + </button>
    </div>
  );
}

function Count(props) {

  return (
    <div className="steps">
      <button onClick={props.reduce}> - </button>
      <div>Count {props.count}</div>
      <button onClick={props.add}> + </button>
    </div>
  );
}

function TheDate(props) {
  const date = new Date();
  date.setDate(date.getDate() + props.count);
  let newDate = date.toLocaleDateString();

  return (
    <div className="date">
      {newDate}
    </div>
  );
}
