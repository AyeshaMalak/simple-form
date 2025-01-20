import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('');
  const [email , setEmail]=useState('');
  const[number , setNumber]= useState('');
  

  const handleSubmit = (e) => {
    e.preventDefault()
    setName('');
    setEmail('');
    setNumber('');
  }
 
  return (
    <>
    <div>
      <h1>Simple Form</h1>
      <form onSumbit={handleSubmit}>

        <input type="text"
        className='inputName'
        value={name}
        onChange={(e)=>setName(e.target.value)}
        placeholder='Enter your Name' />

        <input type="email"
        value={email}
        className='inputEmail'
        onChange={(e)=> setEmail(e.target.value)}
        placeholder='Enter your Email' />


        <input type="number"
        value={number}
        className='inputNumber' 
        onChange={(e)=>setNumber(e.target.value)}
        placeholder='Enter your number'/>

        <button type="submit">Submit</button>
      </form>
    </div>
     
    </>
  )
}

export default App
