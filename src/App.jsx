import { useState } from "react";

const App = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmiValue, setBmiValue] = useState("");
  const [bmiMessage, setBmiMessage] = useState("");

  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeter = height / 100;
      const bmi = (weight / (heightInMeter * heightInMeter)).toFixed(2);

      setBmiValue(bmi);

      if (bmi < 18.5) {
        setBmiMessage("You are under weight.");
      } else if (bmi >= 18.5 && bmi < 25) {
        setBmiMessage("You are normal weight.");
      } else if (bmi >= 25 && bmi < 30) {
        setBmiMessage("You are over weight.");
      } else {
        setBmiMessage("You are obese.");
      }
    } else {
      setBmiValue("");
      setBmiMessage("");
    }
  };
  return (
    <div className="container">
      <h1>WebDev BMI Calculator</h1>
      <div className="input-container">
        <label htmlFor="height">Enter Your Height (cm):</label>
        <input
          type="number"
          name="height"
          id="height"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>

      <div className="input-container">
        <label htmlFor="weight">Enter Your Weight (kg):</label>
        <input
          type="number"
          name="weight"
          id="weight"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>

      <button className="calculate-btn" onClick={calculateBMI}>
        Click to Calculate BMI
      </button>

      {bmiValue && bmiMessage && (
        <div className="result">
          <p>
            Your BMI is: <span className="bmi-value">{bmiValue}</span>
          </p>
          <p>
            Result: <span className="bmi-message">{bmiMessage}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default App;
