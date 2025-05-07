// import BusinessCard from './components/BusinessCard.jsx'
import ThemeContext from '../../components/ThemeContext.jsx'
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import { useContext } from 'react'

const Homescreen = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <div
      className={`flex justify-center sm:h-screen dark:bg-gray-800 ${theme}`}
    >
      <Header />
      <Main />
    </div>
  )
}

export default Homescreen
