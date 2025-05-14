import { useState } from 'react'
import LinkList from '../../../components/LinkList'
import ThemeToggle from '../../../components/ThemeToggle'
import NavToggle from './NavToggle'
import links from '../../../data/cardLinks.json'

const Header = () => {
  const [isOpened, setIsOpened] = useState(false)
  const handleButtonClick = () => setIsOpened(!isOpened)

  return (
    <div className="w-full absolute top-0 left-0 bg-gray-100 dark:bg-gray-900">
      <div className="flex justify-between mx-auto px-5 sm:px-10 sm:max-w-7xl max-sm:my-1">
        <NavToggle onClick={handleButtonClick} />
        <h2 className="lowercase">deemon</h2>
        <LinkList links={links} variant="row" />
        <ThemeToggle />
      </div>
      {isOpened && (
        <div className="sm:hidden pl-4">
          <LinkList links={links} variant="col" />
        </div>
      )}
    </div>
  )
}

export default Header
