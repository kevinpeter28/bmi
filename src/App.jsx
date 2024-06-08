import { useState } from 'react'

import './App.css'

function App() {
  const [height,setHeight]=useState("");
  const [weight,setWeight]=useState("");
  const [bmi,setBmi]=useState(null);
  const [bmiStatus, setBMiStatus]=useState("");
  const [errorMessage,setErrorMessage] = useState("")

  const calculateBmi =()=>{
    const isValidHeight = /^\d+$/.test(height);
    const isValidWeight = /^\d+$/.test(weight);

    if (height && weight) {
      const heightInMeters=height /100;
      const bmiValue=weight/(heightInMeters*heightInMeters);
      setBmi(bmiValue.toFixed(2));
      if(bmiValue < 18.5){
        setBMiStatus("Underweight");
      }else if(bmiValue >= 18.5 && bmiValue <24.9){
        setBMiStatus("Normal Wight");
      }else if(bmiValue >= 25 && bmiValue < 29.9)
        setBMiStatus("Overweight");
       else {
        setBMiStatus("Obese")
       }
       setErrorMessage("");
    }else{
      setBmi(null);
      setBMiStatus("")
      setErrorMessage("Please enter a valid numeric value for height and weight.");
    }
  };
  const clearAll =()=>{
    setHeight("");
    setWeight("");
    setBmi(null);
    setBMiStatus("");
  };

  return (
    <>
      <div className='bmi-calculator'>
        <div className="box"></div>
        <div className="data">
          <h1>BMI CALCULATOR</h1>
          {errorMessage && <p className='error'>{errorMessage}</p>}

          <div className="input-container">
            <label htmlFor='height'>Height (CM):</label>
            <input type="text" value={height} id="height" onChange={(e)=>setHeight(e.target.value)}/>
          </div>
          <div className="input-container">
            <label htmlFor='weight'>Weight (KG):</label>
            <input type="text" value={weight} id="weight" onChange={(e)=>setWeight(e.target.value)}/>
          </div>
          <button onClick={calculateBmi}>Calculate BMI</button>
          <button onClick={clearAll}>Clear</button>

         {bmi!==null &&(
           <div className="result">
            <p>Your BMI is : {bmi}</p>
            <p>Status: {bmiStatus}</p>
          </div>)}
        </div>
      </div>
    </>
  )
}

export default App
