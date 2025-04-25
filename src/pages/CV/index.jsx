import Header from './components/Header'
import Main from './components/Main'
import Footer from './components/Footer'
import style from './CV.module.css'

const CV = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.papper}>
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  )
}

export default CV
