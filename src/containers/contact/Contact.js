import React, {useContext} from "react";
import email from "../../assets/lottie/email";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import StyleContext from "../../contexts/StyleContext";
import {contactInfo, illustration} from "../../portfolio";
import "./Contact.scss";

export default function Contact() {
  const {isDark} = useContext(StyleContext);
  return (
    <div className="main contact-margin-top" id="contact">
      <div className="contact-div-main">
        <div className="contact-header">
          <h1 className="heading contact-title">{contactInfo.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode contact-subtitle"
                : "subTitle contact-subtitle"
            }
          >
            {contactInfo.subtitle}
          </p>
          <div
            className={
              isDark ? "dark-mode contact-text-div" : "contact-text-div"
            }
          >
            {contactInfo.number && (
              <>
                <a
                  className="contact-detail"
                  href={"tel:" + contactInfo.number}
                >
                  {contactInfo.number}
                </a>
                <br />
                <br />
              </>
            )}
            <a
              className="contact-detail-email"
              href={"mailto:" + contactInfo.email_address}
            >
              {contactInfo.email_address}
            </a>
            <br />
            <br />
            <SocialMedia />
          </div>
        </div>
        <div className="contact-image-div">
          {illustration.animated ? (
            <DisplayLottie animationData={email} />
          ) : (
            <img
              alt="Man working"
              src={require("../../assets/images/contactMailDark.svg")}
            ></img>
          )}
        </div>
      </div>
    </div>
  );
}
