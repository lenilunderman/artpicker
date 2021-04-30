import Head from 'next/head'
import AboutUs from '../components/AboutUs'
//import Exhibitions from './Exhibitions'
import Explore from '../components/Explore'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Hero section of the website*/}
      <Hero />
      {/* Explore section page*/}
      <Explore />
      {/* More info about the page */}
      <AboutUs />
    </div>
  )
}
