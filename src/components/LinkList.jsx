import LinkItem from './LinkItem.jsx'

const LinkList = ({ links, variant }) => {
  const row = 'items-center sm:flex-row'
  const col = 'items-center sm:items-start sm:text-xs'

  return (
    <div
      className={`flex justify-center flex-col ${
        variant == 'row' ? row : col
      }`}
    >
      {links.map(link => {
        return <LinkItem key={link.title} link={link} />
      })}
    </div>
  )
}

export default LinkList
