import style from './Main.module.css'
import EduList from '../EduList'
import List from '../List'
import ExJobsList from '../ExJobList'
import jobs from '../../../../data/jobs.json'
import education from '../../../../data/education.json'
import certificates from '../../../../data/certificates.json'
import skills from '../../../../data/skills.json'
import languages from '../../../../data/languages.json'
import interests from '../../../../data/interests.json'

const Main = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.experienceBlock}>
        <h3>WORK EXPERIENCE</h3>
        <ExJobsList jobs={jobs} />
      </div>
      <div className={style.infoBlock}>
        <h3>EDUCATION</h3>
        <EduList items={education} />
        <h3>CERTIFICATES</h3>
        <EduList items={certificates} />
        <h3>SKILLS</h3>
        <List items={skills} />
        <h3>LANGUAGES</h3>
        <List items={languages} />
        <h3>INTERESTS</h3>
        <List items={interests} />
      </div>
    </div>
  )
}

export default Main
