import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
  const [footerNote, setFooterNote] = useState("");
  setFooterNote("R2 事業再構築");

  return (
    <footer className="border-top footer">
      <div className="d-sm-flex justify-content-end py-1">
        <span className="border border-black rounded me-5">
          <p className="fs-3 p-1 mb-0">{footerNote}</p>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
