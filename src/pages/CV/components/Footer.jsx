import LinkList from '../../../components/LinkList.jsx'

const Footer = ({ links }) => {
  return (
    <div className="flex justify-center items-center pt-4">
      <LinkList links={links} variant="col" />
    </div>
  )
}

export default Footer
