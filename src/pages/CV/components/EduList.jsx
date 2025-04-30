import EduItem from './EduItem.jsx'

const EduList = ({ items }) => {
  return items
    .map(item => {
      return <EduItem item={item} />
    })
    .reverse()
}

export default EduList
