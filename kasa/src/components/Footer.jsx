import logoFooter from '../assets/images/logoFooter.png';
import '../assets/styles/Footer.scss';

function Footer() {
  return (
    <footer>
  <img src={logoFooter} alt="logo Kasa" />
            <p>2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;