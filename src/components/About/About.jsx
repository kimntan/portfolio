import { useEffect, useState } from 'react';
import './About.scss';

export default function About () {
  const roles = ['software developer', 'entrepreneur', 'baker', 'coffee enthusiaste', 'mom'];
  const [index, setIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((index) => index + 1)
    }, 2000)
    return () => clearInterval(interval);
  }, [])
  
  return (
    <section className="about">
      <div className="about__slogan">
        <p>Hello,</p>
        <h2>{"I'm"} <span className="about__name">Kim</span> Tan</h2>
        <p>{"I'm"} a{index % roles.length === 1 ? "n" : null} <span className="about__roles">{roles[index % roles.length]}</span></p>
      </div>
    </section>
  )
}