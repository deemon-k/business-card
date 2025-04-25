import LinkItem from '../LinkItem'
import style from './LinkList.module.css'

const LinkList = ({ links }) => {
  return (
    <div className={style.wrapper}>
      {links.map((link) => {
        return <LinkItem key={link.title} link={link} />
      })}
    </div>
  )
}

export default LinkList
