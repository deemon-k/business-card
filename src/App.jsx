import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CV from './pages/CV'
import Homescreen from './pages/Homescreen'

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
