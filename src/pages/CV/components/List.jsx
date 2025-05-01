const List = ({ items }) => {
  return (
    <div className="my-4">
      {items.map(item => {
        return <p className="text-gray-500">{item.title}</p>
      })}
    </div>
  )
}

export default List
