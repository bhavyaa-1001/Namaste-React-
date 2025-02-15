import { useState } from 'react'
import './App.css'
import Button from './components/Button';
import Card from './components/card';
function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  
  return (
    <div>
      <Button handleClick = {handleClick} text="Click Me">
      <h1>{count}</h1>
      </Button>
      {/* <Card name="Bhavya">
      <h1>Best web Dev</h1>
      <p>Trying to be consistent</p>
      <p>Will complete the course soon</p>
      </Card>     */}
    </div>
  )
}

export default App
