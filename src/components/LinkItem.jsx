const LinkItem = ({ link }) => {
  return (
    <a
      className="flex items-center justify-center m-1 no-underline hover:text-deemon"
      href={link.href}
    >
      <div className="flex items-center justify-center m-1">
        <img className="w-4 h-4 mr-1" src={link.logo} />
        {link.title}
      </div>
    </a>
  )
}

export default LinkItem
