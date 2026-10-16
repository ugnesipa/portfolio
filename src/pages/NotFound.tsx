import { Link } from 'react-router'

function NotFound() {
  return (
    <section className="page">
      <h1>Page not found</h1>
      <p>
        That page doesn't exist. <Link to="/">Go home</Link>
      </p>
    </section>
  )
}

export default NotFound
