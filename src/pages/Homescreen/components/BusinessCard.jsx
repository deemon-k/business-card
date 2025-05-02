import profilePhoto from '/cult.gif'
import LinkList from '../../../components/LinkList.jsx'
import links from '../../../data/cardLinks.json'

const BusinessCard = () => {
  return (
    <div className="container mx-auto shadow-2xl w-4/5 p-4 rounded-xs my-10 sm:w-2xl">
      <div className="flex items-center flex-col sm:flex-row">
        <img
          className="w-50 h-50 m-2.5 rounded-full"
          src={profilePhoto}
          alt="profilePhoto"
        />
        <div>
          <h2 className="flex justify-center">Dmitry Krainiak</h2>
          <p className="my-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis voluptatem quasi nam, libero ut debitis vel error
            beatae vero neque, voluptatum perferendis et, deleniti atque quo
            alias nostrum facilis recusandae!
          </p>
        </div>
      </div>
      <LinkList links={links} variant="row" />
    </div>
  )
}

export default BusinessCard
