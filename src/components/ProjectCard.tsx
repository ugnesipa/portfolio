type ProjectCardProps = {
  title: string
  description: string
  href?: string
}

function ProjectCard({ title, description, href }: ProjectCardProps) {
  return (
    <article className="card">
      <h2>{title}</h2>
      <p>{description}</p>
      {href && (
        <a href={href} target="_blank" rel="noreferrer">
          View project →
        </a>
      )}
    </article>
  )
}

export default ProjectCard
