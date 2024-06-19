import React from "react";
import Date from "../../utils/Date";
import Icons from "../Icons/Icons";
import "./Footer.css";
function Footer() {
  return (
    <div>
      <div className="footerContainer">
        <div className="footerNav">
          <div className="FooterLinks">
            <Icons
              twitterUrl={"twitter.com"}
              fbUrl={"facebook.com"}
              instaUrl={"instagram.com"}
            />
          </div>
          <div className="Footertext">
            <p> &copy;2024 all rights reserved. miriam mugure wachira </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
