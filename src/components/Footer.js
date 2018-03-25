import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <Link className="footer-link" to="/admin">
        Admin Panel
      </Link>
      <Link className="footer-link" to="/">
        Home
      </Link>
    </footer>
  );
};

export default Footer;
