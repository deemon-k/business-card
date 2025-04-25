import style from './LinkItem.module.css'

const LinkItem = ({ link }) => {
  return (
    <a className={style.wrapper} href={link.href}>
      <div className={style.link}>
        <img className={style.logo} src={link.logo} />
        {link.title}
      </div>
    </a>
  )
}

export default LinkItem