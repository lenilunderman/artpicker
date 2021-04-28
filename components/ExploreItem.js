import Image from 'next/image'

function ExploreItem({ title, description, src }) {
  return (
    <div className="relative overflow-hidden mb-4 h-auto shadow-md cursor-pointer">
      {src}
      <div className="absolute bottom-1 left-0">
        <div className="bg-gray-500 px-6 opacity-80 py-3 text-lg md:text-sm lg:text-base max-h-56">
          <h4 className="mb-2 pt-4 text-xl font-semibold tracking-tight text-white opacity-100">
            {title}
          </h4>
          <p className="leading-normal text-gray-100 mb-12 ">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default ExploreItem
