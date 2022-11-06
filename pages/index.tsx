import Link from "next/link";
import { useRouter } from "next/router";
import logo from "../public/img/logo.png";
import Image from "next/image";

export const Header = () => {
  const router = useRouter();

  console.log(router.asPath);

  const isActive = (route: string) => route === router.asPath;

  return (
    <div className="header">
      <nav>
        <Image src={logo} width={92.5} height={30} alt="logo" />
        <ul>
          <li>
            <Link href="#" className={isActive("/") ? "active" : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link href="#" className={isActive("#") ? "active" : ""}>
              Tv series
            </Link>
          </li>
          <li>
            <Link href="#" className={isActive("#") ? "active" : ""}>
              Movies
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
