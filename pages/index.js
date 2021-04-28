import Head from 'next/head'
import Explore from '../components/Explore'
import Header from '../components/Header'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Header of the website*/}
      <Header />
      {/* Hero section of the website*/}
      <Hero />
      {/* Explore section page*/}
      <Explore />
      {/* More info about the page */}
    </div>
  )
}
