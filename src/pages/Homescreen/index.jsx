import BusinessCard from './components/BusinessCard/'
import style from './Homescreen.module.css'

const Homescreen = () => {
  return (
    <div className={style.wrapper}>
      <BusinessCard />
    </div>
  )
}

export default Homescreen
