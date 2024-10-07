import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Three Dots</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#home" className="footer__link">
                            Home
                        </a>
                    </li>

                    <li>
                        <a href="#about" className="footer__link">
                            About
                        </a>
                    </li>

                    <li>
                        <a href="#skills" className="footer__link">
                            Skills
                        </a>
                    </li>

                    <li>
                        <a href="#services" className="footer__link">
                            Services
                        </a>
                    </li>

                    <li>
                        <a href="#testimonials" className="footer__link">
                            Testimonials
                        </a>
                    </li>

                    <li>
                        <a href="#contact" className="footer__link">
                            Contact
                        </a>
                    </li>
                </ul>

                <div className="footer__social">
                    <a
                        href="https://www.facebook.com"
                        className="footer__social-link"
                        target="_blank"
                    >
                        <i className="bx bxl-facebook"></i>
                    </a>

                    <a
                        href="https://www.instagram.com"
                        className="footer__social-link"
                        target="_blank"
                    >
                        <i className="bx bxl-instagram"></i>
                    </a>

                    <a
                        href="https://www.tiktok.com"
                        className="footer__social-link"
                        target="_blank"
                    >
                        <i className="bx bxl-tiktok"></i>
                    </a>
                </div>

                <span className="footer__copy">
                    &#169; Three Dots. All rights reserved
                </span>
            </div>
        </footer>
    );
};

export default Footer;
