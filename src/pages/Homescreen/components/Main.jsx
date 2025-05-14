import TypeWritter from './TypeWriter'
import profilePhoto from '/profile-img.png'
import interests from '../../../data/interests.json'

const Main = () => {
  return (
    <div className="flex max-sm:justify-center flex-col w-full sm:max-w-7xl sm:flex-row h-dvh">
      <div className="flex sm:justify-end items-center sm:w-1/2 max-sm:h-3/4">
        <img
          className="w-70 h-70 m-5 rounded-full"
          src={profilePhoto}
          alt="profilePhoto"
        />
      </div>
      <div className="flex justify-end sm:justify-center flex-col max-sm:mb-12 max-sm:pl-5">
        <h1 className="md:text-7xl uppercase">
          Dmitry
          <br />
          Krainiak
        </h1>
        <p className="uppercase h-12 dark:text-gray-300">
          Javascript developer interested in
          <br />
          <TypeWritter words={interests} />
        </p>
      </div>
    </div>
  )
}

export default Main
