import profilePhoto from '/profile-img.png'
import LinkList from '../../../components/LinkList.jsx'
import links from '../../../data/cardLinks.json'
import TypeWritter from './TypeWriter.jsx'
import interests from '../../../data/interests.json'

const BusinessCard = () => {
  return (
    <div className="container mx-auto shadow-2xl w-4/5 p-4 rounded-xs my-10 sm:w-2xl">
      <div className="flex items-center flex-col sm:flex-row">
        <img
          className="w-50 h-50 m-2.5 rounded-full"
          src={profilePhoto}
          alt="profilePhoto"
        />
        <div className="w-full">
          <h2 className="flex justify-center">Dmitry Krainiak</h2>
          <p className="my-4 h-10">
            JavaScript developer interesting in<br />
            <TypeWritter words={interests} />
          </p>
        </div>
      </div>
      <LinkList links={links} variant="row" />
    </div>
  )
}

export default BusinessCard
