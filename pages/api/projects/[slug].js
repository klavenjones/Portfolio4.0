import { projects } from '../../../projects'

export default function getProject({ query: { slug } }, res) {
  const filtered = projects.filter((p) => p.slug === slug)

  //IF Project exists
  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res.status(404).json({ message: `Project does not exist.` })
  }
}
