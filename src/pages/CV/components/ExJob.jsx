const ExJob = ({ job }) => {
  return (
    <div className="w-full mr-4 my-4">
      <div className="flex justify-between">
        <h4>{job.title}</h4>
        <div className="flex justify-center items-center text-gray-500 text-xs">
          {job.company} | {job.years}
        </div>
      </div>
      <div>{job.description}</div>
    </div>
  )
}

export default ExJob
