import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) {
      setStep((s) => s - 1);
      // setStep((s) => s - 1);
    }
  }

  function handleNext() {
    if (step < 3) {
      //updating the state once
      // setStep(step + 1);

      // updating the state twice
      setStep((s) => s + 1);
      // setStep((s) => s + 1);
    }
  }

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        {/* &times; */}
        {isOpen ? "Close" : "Open"}
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          {/* <p className="message">
            <h3>Step {step}</h3>
          </p> */}

          <StepMessage step={step}>{messages[step - 1]}</StepMessage>

          <div className="buttons">
            {step > 1 && (
              <Button
                bgColor="#7950f2"
                textColor="#fff"
                onClick={handlePrevious}
              >
                <span>⏮</span>Previous
              </Button>
            )}

            {step <= 2 && (
              <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
                Next<span>⏭</span>
              </Button>
            )}
          </div>
        </div>
      )}
    </>
  );
}
export default App;

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
}
function Button({ textColor, bgColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
