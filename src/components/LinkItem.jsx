const LinkItem = ({ link }) => {
  return (
    <a
      className="flex items-center justify-center m-1 no-underline hover:text-deemon dark:text-gray-300"
      href={link.href}
    >
      <div className="flex items-center justify-center m-1">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="h-4 w-4 mr-1">
          <path d={link.logo} />
        </svg>
        {link.title}
      </div>
    </a>
  )
}

export default LinkItem
