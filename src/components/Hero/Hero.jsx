import Headshot from '../../assets/images/headshot.jpg';
import './Hero.scss';

export default function Hero () {
  return (
    <section className="hero">
      <div className="hero__background">
        <img className="hero__image" src={Headshot} alt="My headshot"></img>
      </div>
    </section>
  )
}