import style from './BusinessCard.module.css'
import profilePhoto from '/cult.gif'
import LinkList from '../../../components/LinkList'
import links from '../../../data/cardLinks.json'

const BusinessCard = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.infoWrapper}>
      <img src={profilePhoto} alt='profilePhoto' />
        <div>
          <h2>Dmitry Krainiak</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum distinctio vero quidem voluptate, sed aliquid fugiat similique tempora, cupiditate, asperiores voluptatum? Quas veniam porro dicta delectus aspernatur. Est, incidunt cumque.
          </p>
        </div>
      </div>
      <LinkList links={links} />
    </div>
  )
}

export default BusinessCard