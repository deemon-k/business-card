import profilePhoto from '/cult.gif'
import Linklist from '../../../components/LinkList.jsx'
import links from '../../../data/cvLinks.json'

const Header = () => {
  return (
    <>
      <div className="border-b border-gray-200 flex pb-4">
        <div className="w-3/4">
          <h1>DMITRY KRAINIAK</h1>
          <p className="font-light">Back-end developer</p>
        </div>
        <div className="w-1/4 border-l border-gray-200 flex items-center pl-4">
          <Linklist links={links} variant="column" />
        </div>
      </div>
      <div className="py-4 border-b border-gray-200 flex row items-center">
        <img className="w-40 h-40 mr-4 rounded-full" src={profilePhoto} alt="" />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi
          magnam cumque, debitis sit ex amet eos, veniam aliquid fugit non ullam
          quisquam recusandae voluptate voluptas nobis esse aut. Consectetur,
          iste. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
          fugit modi qui nisi! Porro, neque eligendi placeat praesentium enim
          nam eaque? Veniam iusto praesentium neque qui! Nemo eligendi aperiam
          perferendis!
        </p>
      </div>
    </>
  )
}

export default Header
