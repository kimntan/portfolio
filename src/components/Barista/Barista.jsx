import LinkIcon from '../../assets/icons/ExternalIcon.svg';
import ReactIcon from '../../assets/icons/react-original-wordmark.svg';
import NodeIcon from '../../assets/icons/nodejs.svg';
import MysqlIcon from '../../assets/icons/mysql-logo.svg';
import SassIcon from '../../assets/icons/sass.svg';
import HomeBaristaLogo from '../../assets/images/logo.png';
// import HomeBaristaApp from '../../assets/images/barista-mobile.png';
import './Barista.scss';

export default function Barista () {
  const techStack = [ReactIcon, NodeIcon, MysqlIcon, SassIcon];
  const techName = ["React Icon", "Node Icon", "MySQL Icon", "Sass Icon"];
  
  return (
    <div className="barista">
      <div className="barista__container">
        <a className="barista__site-link" href="https://home-barista-zoc1.onrender.com/" target="_blank">
          <h3 className="barista__title">Home Barista</h3>
          <img className="barista__link-icon" src={LinkIcon} alt="External link icon"/>
        </a>
        {/* <img className="barista__mobile" src={HomeBaristaApp} alt="Home Barista application on mobile device."></img> */}
        <div className="barista__description-container">  
          <p className="barista__description">This is a project {"I'm"} particularly proud of as it blends both my passion for web development and my love of coffee.</p>
          <p className="barista__description">As someone who brews coffee at home, I built this application because I wanted a simple yet functional way to record brew parameters and make dialing coffee beans easier.</p>
        </div>
      </div>
      <div className="barista__connector"></div>
      <div className="tech-stack">
        <div className="tech-stack__icons">
          {techStack.map((tech, index) => {
            return <img className="tech-stack__icon" src={tech} alt={techName[index]} key={index}/>
          })}
        </div>
      </div>
      <img className="barista__watermark" src={HomeBaristaLogo} alt="Home Barista Logo"></img>
    </div>
  )
}