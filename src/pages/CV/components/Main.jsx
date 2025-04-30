import EduList from './EduList.jsx'
import List from './List.jsx'
import ExJobsList from './ExJobList.jsx'
import jobs from '../../../data/jobs.json'
import education from '../../../data/education.json'
import certificates from '../../../data/certificates.json'
import skills from '../../../data/skills.json'
import languages from '../../../data/languages.json'
import interests from '../../../data/interests.json'

const Main = () => {
  return (
    <div className="border-b border-gray-200 flex py-4">
      <div className="w-3/4 pr-4">
        <h2>WORK EXPERIENCE</h2>
        <ExJobsList jobs={jobs} />
      </div>
      <div className="w-1/4 border-l border-gray-200 pl-4">
        <h2>EDUCATION</h2>
        <EduList items={education} />
        <h2>CERTIFICATES</h2>
        <EduList items={certificates} />
        <h2>SKILLS</h2>
        <List items={skills} />
        <h2>LANGUAGES</h2>
        <List items={languages} />
        <h2>INTERESTS</h2>
        <List items={interests} />
      </div>
    </div>
  )
}

export default Main
