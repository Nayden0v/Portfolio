import React from "react";
import "./Footer.css";
import Scroll from "../../utilities/Scroll";
export default function Footer() {
  return (
    <div className="scroll-container">
      <button
        className="btn-scroll"
        onClick={() => Scroll.scrollHandler.scrollToHome()}
      >
        {" "}
        <i className="fa fa-arrow-up"></i>
      </button>
    </div>
  );
}