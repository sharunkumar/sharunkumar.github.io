import React, {useContext} from "react";
import StyleContext from "../../contexts/StyleContext";
import "./Footer.scss";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <div className="footer-div">
      <p className={isDark ? "dark-mode footer-text" : "footer-text"}></p>
    </div>
  );
}
