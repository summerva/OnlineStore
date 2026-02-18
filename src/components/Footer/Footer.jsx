import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer container">
      <Link to="/">
        <h1>OnlineStore</h1>
      </Link>
      <div className="footer__nav">
        <a href="">GitHub</a>
        <a href="">GitHub</a>
        <a href="">GitHub</a>
      </div>
    </div>
  );
};

export default Footer;
