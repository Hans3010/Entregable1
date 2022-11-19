import React from 'react'
import Button from './Button'
import Ph1 from './Ph1'

const Quotebox = ({quoteRandom, handleClick, colorRandom}) => {

    const objStyle ={
        color: colorRandom
    }
    const objStyleBtn={
        backgroundColor: colorRandom
    }
  return (
    <article className='card' style={objStyle}>
        <i className="fa-solid fa-quote-left card__icon"></i>
        <Ph1 
        quoteRandom={quoteRandom}
        />
        <Button 
        objStyleBtn={objStyleBtn}
        handleClick={handleClick}
        />
    </article>
  )
}

export default Quotebox