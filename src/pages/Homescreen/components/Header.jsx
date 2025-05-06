import LinkList from '../../../components/LinkList'
import links from '../../../data/cardLinks.json'

const Header = () => {
  return (
    <div className="sm:w-screen sm:absolute sm:left-0 sm:top-0 sm:float-none sm:h-20 sm:flex sm:justify-center sm:items-center">
      <LinkList links={links} variant="row" />
    </div>
  )
}

export default Header