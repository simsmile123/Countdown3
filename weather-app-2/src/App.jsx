import { useState } from 'react'
import GetWeather from './components/GetWeather';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <GetWeather></GetWeather>
  )
}

export default App
