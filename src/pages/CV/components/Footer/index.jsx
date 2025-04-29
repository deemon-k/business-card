import style from './Footer.module.css'
import LinkList from '../../../../components/LinkList'

const Footer = ({ links }) => {
  return (
    <div className={style.wrapper}>
      <LinkList links={links} variant="row" />
    </div>
  )
}

export default Footer
