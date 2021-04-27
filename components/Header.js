import HeaderItem from './HeaderItem'
import { SparklesIcon, HomeIcon } from '@heroicons/react/outline'
import Image from 'next/image'

function Header() {
  return (
    <header className="h-36 min-h-full px-12 flex justify-between items-center bg-gray-900">
      <Image src="/logoart.png" width={160} height={160} />
      <div className="flex px-6 justify-end flex-auto pt-2 mr-6">
        <HeaderItem title="Home" Icon={HomeIcon} />
        <HeaderItem title="Explore" Icon={SparklesIcon} />
      </div>
    </header>
  )
}

export default Header
