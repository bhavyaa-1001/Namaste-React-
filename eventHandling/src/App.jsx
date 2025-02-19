
import './App.css'

function App() {
 
  function handleClick(){
    alert("I am clicked");
  }

  function handleInputChange(){
    console.log("value changed");
  }

  return (
    <div>
      <button onClick={handleClick}>
        Click Me
      </button>

      {/* <form>
        <input type="text" onChange={handleInputChange} />
      </form> */}

    </div>
  )
}

export default App
