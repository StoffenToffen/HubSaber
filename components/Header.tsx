"use client";

import Logo from "@/public/logo.svg";
import menuIcon from "@/public/menu.svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="container header-row">
        <Link href="/" className="heading header-logo">
          <Image src={Logo} alt="HubSaber" width={32} />
          HubSaber
        </Link>

        <button type="button" onClick={() => setMenuOpen(true)}>
          <Image src={menuIcon} alt="menu" width={32} />
        </button>

        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </div>
    </header>
  );
};

export default Header;
