// import '../styles/globals.css'

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp

import '../styles/globals.css'
import App from 'next/app'
import Navbar from '../components/ui/Navbar'

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <Navbar>
        <Component {...pageProps}></Component>
      </Navbar>
    )
  }
}

export default MyApp
