const List = ({ items }) => {
  return items.map(item => {
    return <p className="text-gray-500">{item.title}</p>
  })
}

export default List
