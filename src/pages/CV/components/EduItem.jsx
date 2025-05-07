const EduItem = ({ item }) => {
  if ('href' in item) {
    return (
      <div className="my-4">
        <a
          href={item.href}
          className="text-deemon no-underline hover:underline"
        >
          <b>{item.fieldOfStudy}</b>
        </a>
        <p className="m-0 text-gray-500">{item.organization}</p>
        <p className="m-0 text-gray-500 text-xs">{item.years}</p>
      </div>
    )
  } else {
    return (
      <div className="my-4">
        <b className="dark:text-white">{item.fieldOfStudy}</b>
        <p className="m-0 text-gray-500">{item.organization}</p>
        <p className="m-0 text-gray-500 text-xs">{item.years}</p>
      </div>
    )
  }
}

export default EduItem
