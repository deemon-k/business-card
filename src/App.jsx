import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CV from './pages/CV'
import Main from './pages/Main'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='cv' element={<CV />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App