import Logo from "@/public/logo.svg";
import menuIcon from "@/public/menu.svg";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="container header-row">
        <Link href="/" className="heading header-logo">
          <Image src={Logo} alt="HubSaber" width={32} />
          HubSaber
        </Link>

        <button type="button">
          <Image src={menuIcon} alt="menu" width={32} />
        </button>
      </div>
    </header>
  );
};

export default Header;
