import Link from "next/link";
import { useRouter } from "next/router";
import logo from "../../public/img/logo.png"
import Image from "next/image";
import { useSelector } from "react-redux";
import { IState } from "../../redux/reducers/all";
import { leftNavLinks } from "../../Utils/HeaderTexts";

export const Header = () => {
  const router = useRouter();

  const isActive = (route: string) => route === router.asPath;

  const { language } = useSelector((state: IState) => state?.globalSettings);

  return (
    <div className="header">
      <nav>
        <Image src={logo} width={92.5} height={30} alt="logo" />
        <ul>
          {leftNavLinks(language).map((l,i)=> 
          <li key={i}>
            <Link href={l.route} className={isActive(l.route) ? "active" : ""}>
              {l.name}
            </Link>
          </li>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
