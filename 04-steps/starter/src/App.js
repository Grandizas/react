import { useState } from 'react';

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
const numbers = [1, 2, 3];
const buttonStyle = { backgroundColor: '#7950f2', color: '#fff' };

function App() {
  const [activeStep, setActiveStep] = useState(1);

  function handleNext() {
    setActiveStep((prevActiveStep) => prevActiveStep === 3 ? prevActiveStep = 3 : prevActiveStep + 1);
  }
  function handleBack() {
    setActiveStep((prevActiveStep) => prevActiveStep === 1 ? prevActiveStep = 1 : prevActiveStep - 1);
  }

  function isActive(index) {
    return index <= activeStep;
  }

  return (
    <div className="steps">
      <div className="numbers">
        {numbers.map((number, index) => (
          <div className={`number ${isActive(number) && 'active'}`} key={number}>{number}</div>
        ))}
      </div>

      <p className="message">Step: {activeStep}: {messages[activeStep - 1]}</p>

      <div className="buttons">
        <button className="button" style={buttonStyle} onClick={handleBack}>Previous</button>
        <button className="button" style={buttonStyle} onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default App;
