import Header from '../Header'

function Navbar({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default Navbar
