// import style from './BusinessCard.module.css'
import profilePhoto from '/cult.gif'
import LinkList from '../../../../components/LinkList'
import links from '../../../../data/cardLinks.json'

const BusinessCard = () => {
  return (
    <div className="container mx-auto shadow-2xl w-2xl p-4 rounded-xs">
      <div className="flex items-center">
        <img
          className="w-52 h-52 mr-2.5 rounded-full"
          src={profilePhoto}
          alt="profilePhoto"
        />
        <div>
          <h2 className="text-deemon font-bold uppercase text-2xl">
            Dmitry Krainiak
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
            distinctio vero quidem voluptate, sed aliquid fugiat similique
            tempora, cupiditate, asperiores voluptatum? Quas veniam porro dicta
            delectus aspernatur. Est, incidunt cumque.
          </p>
        </div>
      </div>
      <LinkList links={links} variant="row" />
    </div>
  )
}

export default BusinessCard
