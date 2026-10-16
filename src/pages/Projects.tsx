import ProjectCard from '../components/ProjectCard.tsx'

const projects = [
  { title: 'Project one', description: 'A short description of the project.' },
  { title: 'Project two', description: 'A short description of the project.' },
  { title: 'Project three', description: 'A short description of the project.' },
]

function Projects() {
  return (
    <section className="page">
      <h1>Projects</h1>
      <div className="grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
