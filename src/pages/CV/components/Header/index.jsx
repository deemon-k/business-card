import style from './Header.module.css'
import profilePhoto from '/cult.gif'
import Linklist from '../../../../components/LinkList'
import links from '../../../../data/cvLinks.json'

const Header = () => {
  return (
    <>
      <div className={style.contactBlock}>
        <div className={style.nameBlock}>
          <h1>DMITRY KRAINIAK</h1>
          <p>
            <strong>Back-end developer</strong>
          </p>
        </div>
        <div className={style.linksBlock}>
          <Linklist links={links} variant="column" />
        </div>
      </div>
      <div className={style.textBlock}>
        <img src={profilePhoto} alt="" />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
          magnam cumque, debitis sit ex amet eos, veniam aliquid fugit non ullam
          quisquam recusandae voluptate voluptas nobis esse aut. Consectetur,
          iste. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
          fugit modi qui nisi! Porro, neque eligendi placeat praesentium enim
          nam eaque? Veniam iusto praesentium neque qui! Nemo eligendi aperiam
          perferendis! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Perferendis quisquam accusamus consectetur fuga id sapiente placeat
          culpa, natus ipsam quasi ab dolores dolor eius. Numquam ullam pariatur
          est quia repudiandae! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Commodi nam error aut fuga saepe debitis
          perspiciatis, nobis esse! Magni, quas vitae. Minus autem omnis, amet
          commodi molestiae eum dolorem provident?
        </p>
      </div>
    </>
  )
}

export default Header
