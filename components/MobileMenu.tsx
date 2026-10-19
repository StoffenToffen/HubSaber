import homeIcon from "@/public/home.svg";
import infoIcon from "@/public/info.svg";
import mapIcon from "@/public/map.svg";
import xIcon from "@/public/x.svg";
import Image from "next/image";
import Link from "next/link";

interface MobileMenuProps {
  modalRef: React.RefObject<HTMLDialogElement | null>;
}

const MobileMenu = ({ modalRef }: MobileMenuProps) => {
  return (
    <dialog ref={modalRef}>
      <nav className="mobile-nav">
        <div className="mobile-nav__top">
          <button type="button" onClick={() => modalRef.current?.close()}>
            <Image src={xIcon} alt="close menu" width={32} />
          </button>
        </div>

        <ul>
          <li>
            <Link
              href="/"
              onClick={() => modalRef.current?.close()}
              className="mobile-nav__link"
            >
              Home
              <Image src={homeIcon} alt="" width={32} />
            </Link>
          </li>

          <li>
            <Link
              href="/maps"
              onClick={() => modalRef.current?.close()}
              className="mobile-nav__link"
            >
              Maps
              <Image src={mapIcon} alt="" width={32} />
            </Link>
          </li>

          <li>
            <Link
              href="/about"
              onClick={() => modalRef.current?.close()}
              className="mobile-nav__link"
            >
              About us
              <Image src={infoIcon} alt="" width={32} />
            </Link>
          </li>
        </ul>
      </nav>
    </dialog>
  );
};

export default MobileMenu;
