import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import style from './CV.module.css'
import footerLinks from '../../data/footerLinks.json'

const CV = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.papper}>
        <Header />
        <Main />
        <Footer links={footerLinks} />
      </div>
    </div>
  )
}

export default CV
