import React from "react";
import "../assets/css/footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="privacy">Privacy Policy</div>
      <div style={{ display: "flex", marginLeft: "24px" }}>
        <div className="terms">Terms of Use</div>
        <div className="powered">Powered By Exly</div>
      </div>
      <div style={{ display: "flex", marginLeft: "24px" }}>
        <div className="made">Made with ❤️ in India</div>
        <div className="copyright">© 2022 Stock School.com</div>
      </div>
    </div>
  );
};

export default Footer;
