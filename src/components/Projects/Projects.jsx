import Barista from '../Barista/Barista';
import Wealth from '../Wealth/Wealth';
import './Projects.scss';

export default function Projects () {
  return (
    <section id="projects" className="projects">
      <div className="projects__background">
        <h2 className="projects__heading">Projects</h2>
      </div>
      <div className="projects__container">
        <Barista />
        <Wealth />
      </div>
    </section>
  )
}