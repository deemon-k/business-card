import ExJob from '../ExJob'

const ExJobs = ({ jobs }) => {
  return jobs
    .map((job) => {
      return <ExJob job={job} />
    })
    .reverse()
}

export default ExJobs
