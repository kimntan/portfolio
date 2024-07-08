import Menu from '../../assets/icons/MenuIcon.svg';
import './Header.scss';

export default function Header () {
  return (
    <header className="header">
      <h1 className="header__page-title">K.</h1>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">Projects</li>
          <li className="header__nav-item">Contact</li>
        </ul>
        <img className="header__menu" src={Menu} alt="Menu Icon"/>
      </nav>
    </header>
  )
}