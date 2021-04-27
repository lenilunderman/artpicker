import Head from 'next/head'
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
      <h1 style={{ color: 'red' }}>Background image with 3 photos inside.</h1>
    </div>
  )
}
