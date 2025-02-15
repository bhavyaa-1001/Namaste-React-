import { useState } from 'react'
import './App.css'
import Trump from './components/Trump'

function App() {
  //create state
  //manage state
  //change state

  const [name, setName] = useState('');
  return (
    <div>
      <Trump name={name} setName={setName}/>
      <p>i am inside parent name is :{name} </p>
    </div>
  )
}

export default App
