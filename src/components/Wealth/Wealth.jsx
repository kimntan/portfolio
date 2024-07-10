import LinkIcon from '../../assets/icons/ExternalIcon.svg';
import ReactIcon from '../../assets/icons/react-original-wordmark.svg';
import NodeIcon from '../../assets/icons/nodejs.svg';
import SassIcon from '../../assets/icons/sass.svg';
import './Wealth.scss';

export default function Wealth () {
  const techStack = [ReactIcon, NodeIcon, SassIcon];
  const techName = ["React Icon", "Node Icon", "Sass Icon"];

  return (
    <div className="wealth">
      <div className="wealth__container">
        <a className="wealth__site-link" href="https://github.com/sarahskry/wealthsimple-industry-project" target="_blank">
          <h3 className="wealth__title">Goal Saver</h3>
          <img className="wealth__link-icon" src={LinkIcon} alt="External link icon"/>
        </a>
        <div className="wealth__description-container">  
          <p className="wealth__description">This is a project {"I'm"} particularly proud of as it blends both my passion for web development and my love of coffee.</p>
          <p className="wealth__description">As someone who brews coffee at home, I built this application because I wanted a simple yet functional way to record brew parameters and make dialing coffee beans easier.</p>
        </div>
      </div>
      <div className="wealth__connector"></div>
      <div className="tech-stack">
        <div className="tech-stack__icons">
          {techStack.map((tech, index) => {
            return <img className="tech-stack__icon" src={tech} alt={techName[index]} key={index}/>
          })}
        </div>
      </div>
    </div>
  )
}