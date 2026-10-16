import { Outlet } from 'react-router'
import Header from './Header.tsx'
import Footer from './Footer.tsx'
import '../pages/UnderConstruction.css'

function Layout() {
  return (
    <div className="site">
      <div className="site-bg" aria-hidden="true">
        <div className="uc-noise" />
        <div className="uc-glow uc-glow-one" />
        <div className="uc-glow uc-glow-two" />
      </div>
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
