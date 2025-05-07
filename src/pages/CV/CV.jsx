import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'
import footerLinks from '../../data/footerLinks.json'
import { useContext } from 'react'
import ThemeContext from '../../components/ThemeContext.jsx'

const CV = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={`flex justify-center py-12 dark:bg-gray-800 ${theme}`}>
      <div className="max-sm:w-4/5 sm:w-7xl max-sm:p-4 sm:p-12 shadow-2xl rounded-xs">
        <Header />
        <Main />
        <Footer links={footerLinks} />
      </div>
    </div>
  )
}

export default CV
