const ExJob = ({ job }) => {
  return (
    <div className="w-full mr-4 my-4">
      <div className="flex justify-between">
        <h4 className="dark:text-white">{job.title}</h4>
        <div className="flex justify-center items-center text-gray-500 text-xs">
          {job.company} | {job.years}
        </div>
      </div>
      <div className="dark:text-gray-300">{job.description}</div>
    </div>
  )
}

export default ExJob
