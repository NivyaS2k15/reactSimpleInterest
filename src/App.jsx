

import { TextField, Stack, Button } from '@mui/material'
import './App.css'
import { useState } from 'react'

function App() {
  const [invalidprinciple, setInvalidprinciple] = useState(false)
  const [invalidrate, setInvalidrate] = useState(false)
  const [invalidyear, setInvalidyear] = useState(false)
  const [interest, setInterest] = useState(0)
  const [principle, setPrinciple] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)

  const validateInput = (inputTag) => {
    console.log(inputTag.name);

    const { name, value } = inputTag // DESTRUCTUING
    console.log(name);

    console.log(name, value);
    console.log(!!value.match(/^\d*.?\d+$/));
    // we r getting string string type for the value 
    //console.log(value); \d=[0-9]

    if (name == 'principle') {
      setPrinciple(value)
      if (!!value.match(/^\d+(\.\d+)?$/)) {

        setInvalidprinciple(false)
      } else {
        //alert('invalid principle amount ')
        setInvalidprinciple(true)
      }
    } else if (name == 'rate') {
      setRate(value)
      if (!!value.match(/^\d+(\.\d+)?$/)) {
        setInvalidrate(false)

      } else {
        setInvalidrate(true)
      }
    } else if (name == 'year') {
      setYear(value)
      if (!!value.match(/^\d{1,4}$/)) {
        setInvalidyear(false)

      } else {
        setInvalidyear(true)
      }
    }
  }

  const handleCalculate = (e) => {
    e.preventDefault()
    console.log("button clicked");
    if (principle && rate && year) {
      setInterest(principle * rate * year / 100)
    } else {
      alert("please fill the form")
    }

  }

  const handleReset = () => {
    setInterest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setInvalidprinciple(false)

    setInvalidrate(false)
    setInvalidyear(false)

  }

  return (
    <>
      <div style={{ width: "100%", minHeight: "100vh" }} className='d-flex justify-content-center align-items-center bg-dark'>
        <div className='bg-light rounded p-5'>
          <h3>Simple Interest Calculator</h3>
          <p>Calculate your simple Interest Easily </p>
          <div className='rounded bg-warning py-5 text-center'>
            <h1> ₹ {interest} </h1>
            <p className='fw-bolder'> Total simple interest </p>
          </div>
          <form className='mt-5'>
            {/* principle amount */}
            <div className='mb-3'>
              <TextField value={principle || ""} name='principle' onChange={(e) => { validateInput(e.target) }} className='w-100' id="outlined-principle" label=" ₹  principle amount" variant="outlined" />
            </div>

            {/* invalid principle */}
            {invalidprinciple && <div className='mb-5 text-danger fw-bolder'>
              Invalid principle amount
            </div>}



            {/* Rate */}
            <div className='mb-3'>
              <TextField value={rate || ""} name='rate' onChange={(e) => { validateInput(e.target) }} className='w-100' id="outlined-rate" label="% Rate" variant="outlined" />
            </div>

            {/* invalid rate */}
            {invalidrate && <div className='mb-5 text-danger fw-bolder'>
              Invalid rate
            </div>}


            {/* year */}
            <div className='mb-3'>
              <TextField  value={year || ""} name='year' onChange={(e) => { validateInput(e.target) }} className='w-100' id="outlined-year" label="Time period (Yr)" variant="outlined" />
            </div>
            {/* invalid year*/}
            {invalidyear && <div className='mb-5 text-danger fw-bolder'>
              Invalid year
            </div>}

            {/* buttons */}
            <Stack direction="row" spacing={2}>
              <Button type='submit' onClick={handleCalculate} disabled={invalidprinciple || invalidrate || invalidyear} variant="contained" style={{ width: "50%", height: "70px" }} className='bg-dark'>Calculate</Button>
              <Button onClick={handleReset} variant="outlined" style={{ width: "50%", height: "70px" }} >RESET</Button>
            </Stack>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
