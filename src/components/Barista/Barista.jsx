import { useState } from 'react';
import useScreenSize from '../../utils/width';
import LinkIcon from '../../assets/icons/ExternalIcon.svg';
import ReactIcon from '../../assets/icons/react-original-wordmark.svg';
import NodeIcon from '../../assets/icons/nodejs.svg';
import MysqlIcon from '../../assets/icons/mysql-logo.svg';
import SassIcon from '../../assets/icons/sass.svg';
import KnexIcon from '../../assets/icons/knex-js.svg';
import PassportIcon from '../../assets/icons/passport.svg';
import ChevronDown from '../../assets/icons/ChevronDownIcon.svg';
import ChevronUp from '../../assets/icons/ChevronUpIcon.svg';
import './Barista.scss';

export default function Barista () {
  const techStack = [ReactIcon, NodeIcon, MysqlIcon, SassIcon, KnexIcon, PassportIcon];
  const techName = ["React Icon", "Node Icon", "MySQL Icon", "Sass Icon", "Knex Icon", "Passport Icon"];
  const [expand, setExpand] = useState(false);
  const screenWidth = useScreenSize();

  function handleExpand() {
    expand ? setExpand(false) : setExpand(true)
  }
  
  return (
    <div className="barista">
      <div className="barista__container">
        <a className="barista__site-link" href="https://home-barista-zoc1.onrender.com/" target="_blank">
          <h3 className="barista__title">Home Barista</h3>
          <img className="barista__link-icon" src={LinkIcon} alt="External link icon"/>
        </a>
        <div className={expand ? "barista__description-container" : "barista__description-container barista__description-container--hidden"}>  
          <p className="barista__description">This is a project {"I'm"} particularly proud of as it blends both my passion for web development and my love of coffee.</p>
          <p className="barista__description">As someone who brews coffee at home, I built this application because I wanted a simple yet functional way to record brew parameters and make dialing coffee beans easier.</p>
        </div>
      </div>

      {expand
        ? <>
            <div className="tech-stack__connector"></div>
            <div className="tech-stack">
              
              {techStack.length > 4 && screenWidth < 504
                ? <div className="tech-stack__rows">
                  <div className="tech-stack__icons">
                    {techStack.slice(0, 3).map((tech, index) => {
                      return <img className="tech-stack__icon" src={tech} alt={techName[index]} key={index}/>
                    })}
                  </div>
                  <div className="tech-stack__icons">
                    {techStack.slice(3).map((tech, index) => {
                      return <img className="tech-stack__icon" src={tech} alt={techName[index]} key={index}/>
                    })}
                  </div>
                </div> 

                : <div className="tech-stack__icons">
                  {techStack.map((tech, index) => {
                    return <img className="tech-stack__icon" src={tech} alt={techName[index]} key={index}/>
                  })}
                </div>
              }

            </div>
            <div className="tech-stack__open" onClick={handleExpand}>
              <p className="tech-stack__text">More</p>
              <img className="tech-stack__chevron" src={ChevronUp} alt="Chevron Up Icon"/>
            </div>
        </>
        : <div className="tech-stack__open" onClick={handleExpand}>
            <p className="tech-stack__text">More</p>
            <img className="tech-stack__chevron" src={ChevronDown} alt="Chevron Down Icon"/>
          </div>
      }
      
    </div>
  )
}