import { useState } from 'react'
import './App.css'
import Quotebox from './components/Quotebox'
import quotes from './json/quotes.json'
import colors from './json/colors.json'

function App() {
  const getRandomElement = arr => {
    const indexRandom = Math.floor(arr.length * Math.random())
    return arr[indexRandom]
  }

  const [quoteRandom, setQuoteRandom] = useState(getRandomElement(quotes))
  const [colorRandom, setColorRandom] = useState(getRandomElement(colors))

  const handleClick = () => {
    setQuoteRandom(getRandomElement(quotes))
    setColorRandom(getRandomElement(colors))
  }

  console.log(colorRandom)

  const objStyle = {
    backgroundColor:colorRandom
  }
  return (
    <div className="App" style={objStyle}>
      <Quotebox 
      quoteRandom={quoteRandom}
      handleClick={handleClick}
      colorRandom={colorRandom}
      />
    </div>
  )
} 

export default App
