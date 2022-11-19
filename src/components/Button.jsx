import React from 'react'

const Button = ({objStyleBtn, handleClick}) => {
  return (
    <button className='card__btn' onClick={handleClick} style={objStyleBtn}>&gt;</button>
  )
}

export default Button