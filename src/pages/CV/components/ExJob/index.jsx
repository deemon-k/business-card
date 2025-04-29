import style from './ExJob.module.css'

const ExJob = ({ job }) => {
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <h4 className={style.title}>{job.title}</h4>
        <div className={style.additional}>
          {job.company} | {job.years}
        </div>
      </div>
      <div className={style.info}>{job.description}</div>
    </div>
  )
}

export default ExJob
