import FadeIn from 'react-fade-in'
import { LibraryIcon, GlobeIcon } from '@heroicons/react/outline'
import Link from 'next/Link'

function Hero() {
  return (
    <FadeIn
      className="flex flex-col items-center py-8 shadow sm:my-14"
      delay="100"
      transitionDuration="1200"
    >
      <h1 className="text-5xl text-center font-medium text-gray-900 my-6 sm:px-6">
        {' '}
        Would you like to learn more about art?{' '}
      </h1>
      <LibraryIcon className="h-20 my-6 font-light text-gray-800 visible md:hidden" />
      <p className="font-medium text-2xl text-gray-700 md:p-12 md:text-3xl">
        {' '}
        You are in the right place our collection.
      </p>

      <Link href="Exhibitions">
        <button
          className="w-full h-16 px-10 my-8 text-indigo-100 transition-colors duration-150 bg-gray-900 rounded-lg focus:shadow-outline hover:bg-gray-700 sm:w-64 md:w-96 text-1xl md:text-2xl flex items-center
        "
        >
          <GlobeIcon className="h-5 px-3" />
          Explore and discover
        </button>
      </Link>
    </FadeIn>
  )
}

export default Hero
