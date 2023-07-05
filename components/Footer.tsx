import React from "react";
import Image from "next/image";
import { footerLinks } from "@/constants";
import Link from "next/link";

type ColumnPorps = {
  title: string;
  links: Array<string>;
};

const FooterColumn = ({ title, links }: ColumnPorps) => (
  <div className="footer_column">
    <h4 className="font-semibold">{title}</h4>
    <ul className="flex flex-col gap-2 font-normal">
      {links.map((link) => <Link href="/" key={link}>{link}</Link>)}
    </ul>
  </div>
);

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
