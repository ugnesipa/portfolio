import { Outlet } from 'react-router'
import Header from './Header.tsx'
import Footer from './Footer.tsx'

function Layout() {
  return (
    <div className="site">
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout
