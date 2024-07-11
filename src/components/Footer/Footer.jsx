import LinkedIn from '../../assets/icons/linkedin.png';
import GitHub from '../../assets/icons/github.png';
import Email from '../../assets/icons/mail.png';
import './Footer.scss';

export default function Footer () {
  return (
    <footer id="contact" className="footer">
      <h2 className="footer__heading">Contact</h2>
      <div className="footer__content">
        <div className="footer__info">
          <span className="footer__name">Kim Nguyen Tan</span>
          <span className="footer__address">Mississauga, ON</span>
          <span className="footer__address">Canada</span>
        </div>
        <div className="footer__socials">
          <a href="mailto:kim.thd.nguyen@gmail.com"><img className="footer__icon" src={Email} alt="Email icon"/></a>
          <a href="https://www.linkedin.com/in/kim-nguyen-tan/" target="_blank"><img className="footer__icon" src={LinkedIn} alt="LinkedIn icon"/></a>
          <a href="https://github.com/kimntan" target="_blank"><img className="footer__icon" src={GitHub} alt="Github icon"/></a>
        </div>
      </div>
    </footer>
  )
}