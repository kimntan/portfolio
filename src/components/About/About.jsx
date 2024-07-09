import { useEffect, useState, useRef } from 'react';
import './About.scss';

export default function About () {
  const roles = ['software developer', 'entrepreneur', 'coffee enthusiaste'];
  const [role, setRole] = useState(roles[0]);
  const index = useRef(0);
  
  useEffect(() => {
    setInterval(() => {
      if (index.current < 2) {
        index.current++;
        setRole(roles[index.current]);
      } else {
        index.current = 0;
        setRole(roles[index.current]);
      }
    }, 1500);
  }, [])
  
  return (
    <section className="about">
      <div className="about__slogan">
        <p>Hello,</p>
        <h2>{"I'm"} <span className="about__name">Kim</span> Tan</h2>
        <p>{"I'm"} a <span className="about__roles">{role}</span></p>
      </div>
    </section>
  )
}