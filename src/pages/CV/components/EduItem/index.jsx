import style from './EduItem.module.css'

const EduItem = ({ item }) => {
  if ('href' in item) {
    return (
      <div className={style.wrapper}>
        <a href={item.href} className={style.link}>
          <b>{item.fieldOfStudy}</b>
        </a>
        <p className={style.organization}>{item.organization}</p>
        <p className={style.years}>{item.years}</p>
      </div>
    )
  } else {
    return (
      <div className={style.wrapper}>
        <b>{item.fieldOfStudy}</b>
        <p className={style.organization}>{item.organization}</p>
        <p className={style.years}>{item.years}</p>
      </div>
    )
  }
}

export default EduItem
