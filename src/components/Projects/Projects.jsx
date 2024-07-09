import Barista from '../Barista/Barista';
import './Projects.scss';

export default function Projects () {
  return (
    <section className="projects">
      <div className="projects__background">
        <h2 className="projects__heading">Projects</h2>
      </div>
      <Barista />
    </section>
  )
}