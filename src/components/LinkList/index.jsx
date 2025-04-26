import LinkItem from '../LinkItem'
import style from './LinkList.module.css'

const LinkList = ({ links, variant }) => {
  if (variant === 'row') {
    return (
      <div className={style.rowWrapper}>
        {links.map((link) => {
          return <LinkItem key={link.title} link={link} />
        })}
      </div>
    )
  }

  if (variant === 'column') {
    return (
      <div className={style.columnWrapper}>
        {links.map((link) => {
          return <LinkItem key={link.title} link={link} />
        })}
      </div>
    )
  }
}

export default LinkList
