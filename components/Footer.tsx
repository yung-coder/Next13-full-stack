import React from "react";


const Footer = () => {
  return (
    <footer className="flexStart footer">
      <div className="flexBetween footer_copyright">
        <p>@ 2023 Flexibble. All rights reserved</p>
        <p className="text-gray">
          <span className="text-black font-semibold">6</span>{" "}
          projects submitted
        </p>
      </div>
    </footer>
  );
};

export default Footer;
