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
      <div className="about__content-container">
        <p className="about__content">I began learning about web technologies as a pastime 5 years ago, while also being a stay-at-home mom. After years of self-teaching, I came across a bootcamp opportunity, which allowed me to really delve into the foundations of web development. I was able to build many projects, participate in hackathons, and hone my skills as a web developer.</p>
        <p className="about__content">Now, after completing my program and earning a diploma in software engineering, {"I'm"} still learning, and pursuing my passion for building functional and beautiful web pages. I hope to master my craft and confidently seek out opportunities to grow as a developer.</p>
      </div>
    </section>
  )
}