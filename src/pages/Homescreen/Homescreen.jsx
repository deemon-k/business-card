import BusinessCard from './components/BusinessCard.jsx'
import Header from './components/Header.jsx'
import Main from './components/Main.jsx'

const Homescreen = () => {
  return (
    <div className="sm:h-screen dark:bg-gray-800">
      <Header />
      <Main />
    </div>
  )
}

export default Homescreen
