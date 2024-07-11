import { useState } from 'react';
import LinkIcon from '../../assets/icons/ExternalIcon.svg';
import ReactIcon from '../../assets/icons/react-original-wordmark.svg';
import NodeIcon from '../../assets/icons/nodejs.svg';
import SassIcon from '../../assets/icons/sass.svg';
import ChevronDown from '../../assets/icons/ChevronDownIcon.svg';
import ChevronUp from '../../assets/icons/ChevronUpIcon.svg';
import './Wealth.scss';

export default function Wealth () {
  const techStack = [ReactIcon, NodeIcon, SassIcon];
  const techName = ["React Icon", "Node Icon", "Sass Icon"];
  const [expand, setExpand] = useState(false);

  function handleExpand() {
    expand ? setExpand(false) : setExpand(true)
  }

  return (
    <div className="wealth">
      <div className="wealth__container">
        <a className="wealth__site-link" href="https://github.com/sarahskry/wealthsimple-industry-project" target="_blank">
          <h3 className="wealth__title">Goal Saver</h3>
          <img className="wealth__link-icon" src={LinkIcon} alt="External link icon"/>
        </a>
        <div className={expand ? "wealth__description-container" : "wealth__description-container wealth__description-container--hidden"}>  
          <p className="wealth__description">I built this application in collaboration with 4 other developers during a WealthSimple hackathon. We were prompted with the problem of how to increase {"Canadians'"} financial literacy and came up with the idea to gamify saving money. </p>
          <p className="wealth__description">For this project, I built out the main game component and also helped my teammates with other compoonents and building the server-side API.</p>
        </div>
      </div>

      {expand
        ? <>
            <div className="tech-stack__connector"></div>
            <div className="tech-stack">
              <div className="tech-stack__icons">
                {techStack.map((tech, index) => {
                  return <img className="tech-stack__icon" src={tech} alt={techName[index]} key={index}/>
                })}
              </div>
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