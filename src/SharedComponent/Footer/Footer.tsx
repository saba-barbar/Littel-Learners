import "./Footer.css";
import {
    contactData,
    footerLinksData,
    socialLinksData,
} from "./footerData";

function Footer() {
    return (
        <footer className="footerContainer">
            <div className="footerTop">
                <div className="footerBrand">
                    <div className="brandHeader">
                        <img src="/icons/nav-icon.svg"  alt="Little Learners logo"  className="brandLogo"  />
                        <h3 className="brandName">Little Learners</h3>
                    </div>

                    <p className="brandDescription">
                        We believe in the power of play to foster creativity,
                        problem-solving skills, and imagination.
                    </p>

                    <ul className="contactList">
                        {contactData.map((item, index) => (
                            <li className="contactItem" key={index}>
                                <span className="contactIconWrap">
                                    <img src={item.icon} alt="icon" />
                                </span>
                                <span>{item.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="footerLinksGrid">
                    {footerLinksData.map((column, index) => (
                        <div className="footerColumn" key={index}>
                            <h4 className="columnTitle">{column.title}</h4>
                            <ul className="footerLinks">
                                {column.links.map((link, i) => (
                                    <li key={i}>{link}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className="footerDivider" />

            <div className="footerBottom">
                <div className="policyLinks">
                    <span>Terms of Service</span>
                    <span>Privacy Policy</span>
                    <span>Cookie Policy</span>
                </div>

                <div className="socialLinks">
                    {socialLinksData.map((item, index) => (
                        <a href="#" className="socialBtn"  key={index} aria-label={item.label}>
                            <img src={item.icon} alt={item.label} />
                        </a>
                    ))}
                </div>
            </div>

            <div className="footerDivider footerDividerBottom" />

            <p className="copyright">
                Copyright © [2023] Little Learners Academy. All rights reserved.
            </p>
        </footer>
    );
}

export default Footer;