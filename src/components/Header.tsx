import { Link, NavLink } from 'react-router'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

function Header() {
  return (
    <header className="header">
      <Link to="/" className="brand">
        Ugne
      </Link>
      <nav className="nav">
        {links.map(({ to, label }) => (
          <NavLink key={to} to={to} end={to === '/'}>
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

export default Header
