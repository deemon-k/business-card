import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CV from './pages/CV/CV.jsx'
import Homescreen from './pages/Homescreen/Homescreen.jsx'
import ThemeContext from './components/ThemeContext.jsx'
import { useEffect, useState } from 'react'

const App = () => {
  // const preference = window.matchMedia('(prefers-color-scheme: dark)').matches
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || '')

  // useEffect(() => {
  //   preference && setTheme('dark')
  // }, [])

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homescreen />} />
          <Route path="cv" element={<CV />} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  )
}

export default App
