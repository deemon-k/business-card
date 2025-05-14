import profilePhoto from '/profile-img.png'
import Linklist from '../../../components/LinkList.jsx'
import links from '../../../data/cvLinks.json'

const Header = () => {
  return (
    <>
      <div className="flex max-sm:flex-col max-sm:items-center border-b border-gray-200 dark:border-gray-700 pb-4">
        <div className="sm:w-3/4">
          <h1>DMITRY KRAINIAK</h1>
          <p className="font-light dark:text-gray-300">JavaScript developer</p>
        </div>
        <div className="w-full sm:w-1/4 sm:border-l border-gray-200 dark:border-gray-700 flex items-start sm:pl-4">
          <Linklist links={links} variant="column" />
        </div>
      </div>
      <div className="flex max-sm:flex-col py-4 border-b border-gray-200 dark:border-gray-700 items-center">
        <img
          className="w-40 h-40 max-sm:mb-4 sm:mr-4 rounded-full"
          src={profilePhoto}
          alt=""
        />
        <p className="dark:text-gray-300">
          I am JavaScript developer. Selflearned JavaScript and React. Obsessed
          with innovative information technologies. Last year I worked a lot
          with Telegraf.js. Teached basics of DevOps on a courses like jenkins,
          ansible, terraform.
        </p>
      </div>
    </>
  )
}

export default Header
