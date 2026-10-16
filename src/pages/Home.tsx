import { Link } from 'react-router'
import heroImg from '../assets/hero.png'

function Home() {
  return (
    <section className="page home">
      <img src={heroImg} width="170" height="179" alt="" />
      <h1>Hi, I'm Ugne</h1>
      <p>Welcome to my portfolio.</p>
      <Link to="/projects" className="button">
        See my work
      </Link>
    </section>
  )
}

export default Home
