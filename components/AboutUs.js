import { AcademicCapIcon, ViewGridAddIcon } from '@heroicons/react/outline'

function AboutUs() {
  return (
    <div className="xl:flex h-96 mt-8">
      <div className="h-96 bg-yellow-400 text-gray-800">
        <div className="min-h-full">
          <h1 className="text-center py-12 text-6xl font-medium">What we do</h1>
          <p className="p-5 mt-1 text-xl text-justify md:px-20 xl:px-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            repudiandae quia minus amet itaque alias vitae adipisci soluta nisi
            sed?
          </p>
        </div>
      </div>
      <div className="info flex h-96 text-gray-800 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 xl:text-lg">
        <div className="artist flex flex-col justify-center pl-4 md:px-20 xl:px-10">
          <h1 className="text-lg font-bold py-3 px-2 text-center">
            {' '}
            Artist & Art{' '}
          </h1>
          <AcademicCapIcon className="h-20" />
          <p className="text-left py-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed quae
            esse suscipit.
          </p>
        </div>
        <div className="artist flex flex-col justify-center pl-4 md:px-20 xl:px-10">
          <h1 className="text-lg font-bold py-3 px-2 text-center">
            {' '}
            Artist & Art{' '}
          </h1>
          <ViewGridAddIcon className="h-20" />
          <p className="text-left py-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed quae
            esse suscipit.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
