import Link from "next/link";
import React from "react";
import Image from "next/image";
import { NavLinks } from "@/constants";
import AuthProviders from "./AuthProviders";

const Navbar = () => {
  const session = {};
  return (
    <nav className="flexBetween navbar border border-red-500">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image
            src=""
            width={145}
            height={43}
            alt="Felx"
          />
        </Link>
        <ul className="xl:flex hidden text-small gap-7">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>

      <div className="flexCenter gap-4">
        {session
          ? (
            <>
              UserPhoto

              <Link href="/create-project">
                Share work
              </Link>
            </>
          )
          : <AuthProviders />}
      </div>
    </nav>
  );
};

export default Navbar;
