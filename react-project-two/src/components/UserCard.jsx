import React from 'react'
import bhavyapic from '../assets/githublogo.png'
import './UserCard.css'

const UserCard = (props) => {
  return (
    <div className='user-container'>
      <p id='user-name'>{props.name}</p>
      <img id='user-img' src={bhavyapic} alt="hii" />
      <p id='user-desc'>Description of  {props.name}</p>
    </div>
  )
}

export default UserCard