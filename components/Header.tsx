"use client";

import homeIcon from "@/public/home.svg";
import infoIcon from "@/public/info.svg";
import logo from "@/public/logo.svg";
import mapIcon from "@/public/map.svg";
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
          <Image src={logo} alt="" width={32} />
          HubSaber
        </Link>

        <button
          type="button"
          onClick={() => {
            document.body.style.overflow = "hidden";
            setMenuOpen(true);
          }}
          className="header-nav__btn"
        >
          <Image src={menuIcon} alt="menu" width={32} />
        </button>

        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <nav className="header-nav">
          <ul className="header-nav__list">
            <li>
              <Link href="/" className="header-link">
                <Image src={homeIcon} alt="HubSaber" width={24} />
                Home
              </Link>
            </li>

            <li>
              <Link href="/maps" className="header-link">
                <Image src={mapIcon} alt="HubSaber" width={24} />
                Maps
              </Link>
            </li>

            <li>
              <Link href="/about" className="header-link">
                <Image src={infoIcon} alt="HubSaber" width={24} />
                About us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
