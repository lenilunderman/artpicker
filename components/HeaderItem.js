function HeaderItem({ title, Icon }) {
  return (
    <div className="hover:text-gray-500 group flex flex-col items-center w-16 ml-6 text-white">
      <Icon className="h-8 mb-1" />
      <p>{title}</p>
    </div>
  )
}

export default HeaderItem
