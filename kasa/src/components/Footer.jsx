import logoFooter from "../assets/images/logoFooter.png";

function Footer() {
    return (
        <footer>
            <img src={logoFooter} alt="logo Kasa" className="footer__logo" />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;
