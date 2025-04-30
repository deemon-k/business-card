import ExJob from './ExJob.jsx'

const ExJobList = ({ jobs }) => {
  return jobs
    .map(job => {
      return <ExJob job={job} />
    })
    .reverse()
}

export default ExJobList
