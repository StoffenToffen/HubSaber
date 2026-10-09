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
  const handleClose = () => {
    document.body.style.overflow = "unset";
    setMenuOpen(false);
  };

  return (
    <nav className={`mobile-nav ${!menuOpen ? "hidden" : ""}`}>
      <div className="mobile-nav__top">
        <button type="button" onClick={handleClose}>
          <Image src={xIcon} alt="close menu" width={32} />
        </button>
      </div>

      <Link href="/" onClick={handleClose} className="mobile-nav__link">
        Home
        <Image src={homeIcon} alt="" width={32} />
      </Link>

      <Link href="/maps" onClick={handleClose} className="mobile-nav__link">
        Maps
        <Image src={mapIcon} alt="" width={32} />
      </Link>

      <Link href="/about" onClick={handleClose} className="mobile-nav__link">
        About us
        <Image src={infoIcon} alt="" width={32} />
      </Link>
    </nav>
  );
};

export default MobileMenu;
