import style from './List.module.css'

const List = ({ items }) => {
  return items.map((item) => {
    return <p className={style.element}>{item.title}</p>
  })
}

export default List
