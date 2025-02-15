import Login from './components/Login';
import Logout from './components/Logout';
import { useState } from 'react'
import './App.css'

function App() {
  const[isLoggedIn, setLoggedIn] = useState(0);

  if(!isLoggedIn){
    return(
      <Login/>
    )
  }

  return(
    <div>
      <div>
        {isLoggedIn && <Logout/>}
      </div>
    </div>
  )

  // return(
  //   <div>
  //    {isLoggedIn ? <Logout/> :<Login/>}
  //   </div>
  // )

  // if(isLoggedIn){
  //   return(
  //     <Logout/>
  //   )
  // }
  // else{
  //   return(
  //     <Login/>
  //   )
  // }

}

export default App
