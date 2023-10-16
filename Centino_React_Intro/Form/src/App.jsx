import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [fname, setFirstName] = useState("")
  const [lname, setLastName] = useState("")
  const [address, setAddress] = useState("")


  return (
    <>
      <form>   
          <h1> Kewl Kid </h1>
          <div class="formcontainer"> 
            <hr/>
            <div class="container">
            <label label="fname">First name:</label><br/>
              <input type="text" id="fname" name="fname" onChange={(e) => setFirstName(e.target.value)}/><br/>
              <label label="lname">Last name:</label><br/>
              <input type="text" id="lname" name="lname" onChange={(e) => setLastName(e.target.value)}/><br/>
              <label label="address">Address:</label><br/>
              <input type="text" id="address" name="address" onChange={(e) => setAddress(e.target.value)}/><br/>
              <input type="submit" value="Submit"/>
            </div>
        </div>
        {fname} {lname} {address}
      </form> 
    </>
  )
}

export default App
