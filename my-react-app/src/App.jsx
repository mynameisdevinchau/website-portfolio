import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//imports for different sections
import HeroSection from './sections/HeroSection';

function App() {
  const [count, setCount] = useState(0)

/*
<HeroSection>
<About> 
*/
  return (
   <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold text-blue-600">
        Tailwind is working 🚀
      </h1>
    </div>
  )
}

export default App
