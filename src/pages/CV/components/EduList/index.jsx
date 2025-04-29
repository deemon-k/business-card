import EduItem from '../EduItem'
// import style from './EduList.module.css'

const EduList = ({ items }) => {
  return items
    .map((item) => {
      return <EduItem item={item} />
    })
    .reverse()
}

export default EduList
