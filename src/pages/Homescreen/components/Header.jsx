import LinkList from '../../../components/LinkList'
import ThemeToggle from '../../../components/ThemeToggle'
import links from '../../../data/cardLinks.json'

const Header = () => {
  return (
    <div className="sm:w-full sm:absolute sm:top-0 sm:left-0">
      <div className="flex justify-between mx-auto px-10 sm:max-w-7xl">
        <h2 className="lowercase">deemon</h2>
        <LinkList links={links} variant="row" />
        <ThemeToggle />
      </div>
    </div>
  )
}

export default Header
