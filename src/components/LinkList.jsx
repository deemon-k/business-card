import LinkItem from './LinkItem.jsx'

const LinkList = ({links, variant}) => {
  const row = 'items-center sm:flex-row'
  const col = 'items-center sm:items-start'

  return (
    <div className={`flex justify-between flex-col ${variant == 'row' ? row : col}`}>
      {links.map(link => {
        return <LinkItem key={link.title} link={link} />
      })}
    </div>
  )
}


export default LinkList
