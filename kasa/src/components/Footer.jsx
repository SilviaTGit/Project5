import logoFooter from '../assets/images/logoFooter.png';
//import '../assets/styles/components/_footer.scss';

function Footer() {
  return (
    <footer>
  <img src={logoFooter} alt="logo Kasa" />
            <p>©2020 Kasa. All rights reserved</p>
    </footer>
  );
};

export default Footer;