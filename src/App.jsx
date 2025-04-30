import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CV from './pages/CV/CV.jsx'
import Homescreen from './pages/Homescreen/Homescreen.jsx'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homescreen />} />
        <Route path="cv" element={<CV />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
