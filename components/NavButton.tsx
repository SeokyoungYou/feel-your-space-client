import {
  faFireFlameCurved,
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

interface NavButton {
  title: string;
  href: string;
}

export default function NavButton({ title, href }: NavButton) {
  const router = useRouter();
  const isActive = router.pathname === href;
  const activeLink = isActive ? "bg-myNavy" : "bg-myLightNavy";
  const activeLogo = isActive ? "text-myRed" : "text-myLightNavy";

  return (
    <Link href={href}>
      <a
        className={`flex items-center justify-center w-20 h-20 mt-10 transition ease-in-out rounded-full cursor-pointe hover:-translate-y-5 ${activeLink} `}
      >
        {/* Curved title on navigation button */}
        <svg
          className="w-10 h-10 overflow-visible  rotate rotate-[180.5deg] fill-current h-300 w-300 flex-no-shrink"
          viewBox="0 0 300 300"
          fill="transparent"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="fullCircle"
            d="M300 150C300 232.843 232.843 300 150 300C67.1573 300 0 232.843 0 150C0 67.1573 67.1573 0 150 0C232.843 0 300 67.1573 300 150Z"
            fill="#FFFFFF"
          />
          <text textLength="155%" dy="-35" className=" text-8.5xl fill-myGray">
            <textPath href="#fullCircle">
              <tspan className=" text-myNavy">{title}</tspan>
            </textPath>
          </text>
        </svg>
        {/* Logo selection by routes */}
        <div className={`absolute ${activeLogo}`}>
          {href === "/" ? (
            <Image
              src="/logo.png"
              width="28rem"
              height="28rem"
              alt="mainLogo"
            />
          ) : null}
          {href === "/trending" ? (
            <FontAwesomeIcon className="text-2xl " icon={faFireFlameCurved} />
          ) : null}
          {href === "/login" ? (
            <FontAwesomeIcon className="text-2xl " icon={faRightToBracket} />
          ) : null}
        </div>
      </a>
    </Link>
  );
}
