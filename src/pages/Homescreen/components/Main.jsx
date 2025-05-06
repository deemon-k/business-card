import TypeWritter from './TypeWriter'
import interests from '../../../data/interests.json'

const Main = () => {
  return (
    <div className="flex sm:flex-row sm:h-full sm:left-0 sm:bottom-0">
      <div className="flex justify-center items-end sm:w-1/2">
        <div className="bg-sky-500 w-96 h-192 bottom-0"></div>
      </div>
      <div className="flex justify-center flex-col">
      <h1 className="text-7xl uppercase">Dmitry<br/>Krainiak</h1>
      <p className="uppercase h-12 dark:text-gray-300">Javascript developer interested in<br/><TypeWritter words={interests} /></p>
      </div>
    </div>
  )
}

export default Main