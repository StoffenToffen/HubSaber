import homeIcon from "@/public/home.svg";
import infoIcon from "@/public/info.svg";
import mapIcon from "@/public/map.svg";
import xIcon from "@/public/x.svg";
import Image from "next/image";
import Link from "next/link";

interface MobileMenuProps {
  menuOpen: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenu = ({ menuOpen, setMenuOpen }: MobileMenuProps) => {
  return (
    <nav className={`mobile-nav ${!menuOpen ? "hidden" : ""}`}>
      <div className="mobile-nav__top">
        <button
          type="button"
          onClick={() => {
            document.body.style.overflow = "unset";
            setMenuOpen(false);
          }}
        >
          <Image src={xIcon} alt="close menu" width={32} />
        </button>
      </div>

      <Link href="/home" className="mobile-nav__link">
        Home
        <Image src={homeIcon} alt="home" width={32} />
      </Link>

      <Link href="/maps" className="mobile-nav__link">
        Maps
        <Image src={mapIcon} alt="maps" width={32} />
      </Link>

      <Link href="/about" className="mobile-nav__link">
        About us
        <Image src={infoIcon} alt="about us" width={32} />
      </Link>
    </nav>
  );
};

export default MobileMenu;
