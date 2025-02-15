import React from 'react'

const Trump = (props) => {
  return (
    <div>
      <input type='text' onChange={(e)=> props.setName(e.target.value)} />
      <p>Name state variable value : {props.name}</p>
    </div>
  )
}

export default Trump
