import Header from './components/Header.jsx'
import Main from './components/Main.jsx'
import Footer from './components/Footer.jsx'
import footerLinks from '../../data/footerLinks.json'

const CV = () => {
  return (
    <div className="flex justify-center my-12">
      <div className="max-sm:w-4/5 sm:w-5xl max-sm:p-4 sm:p-12 shadow-2xl rounded-xs">
        <Header />
        <Main />
        <Footer links={footerLinks} />
      </div>
    </div>
  )
}

export default CV
