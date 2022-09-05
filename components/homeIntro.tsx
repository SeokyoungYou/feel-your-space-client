import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { homeIntroState } from "states";

// Static Generation 사용할 것
export default function HomeIntro() {
  const router = useRouter();
  const isHome = router.pathname === "/";
  // first visit: true, others: false
  const [isHomeIntro, setHomeIntro] = useRecoilState(homeIntroState);
  const homeBtnClicked = () => {
    setHomeIntro(false);
  };
  return (
    <>
      {/* Turn on HomeIntro at first visit on Home url  */}
      {isHome && isHomeIntro ? (
        <div
          id="home-intro"
          className="fixed z-50 items-center justify-center w-screen h-screen "
        >
          <Image
            src="/initialPic.jpg"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            // width="5408"
            // height="7952"
            alt="homeIntro"
          />
          <div className="absolute flex flex-col items-center justify-center w-screen text-5xl lg:text-7xl lg:top-40 top-20">
            <div className="block w-16 h-16 lg:w-24 lg:h-24">
              <Image
                src="/whiteLogo.png"
                layout="responsive"
                width="93"
                height="80"
                alt="mainLogo"
              />
            </div>
            <div className=" text-myGray">Feel your space</div>
          </div>
          <div className="absolute flex justify-center w-screen gap-10 text-lg lg:text-2xl bottom-20 lg:gap-32 lg:bottom-28">
            {/* To trending page  */}
            <Link href="/trending">
              <a
                onClick={homeBtnClicked}
                className="w-48 py-2 text-center border-2 rounded-md bg-opacity-20 border-myGray text-myGray bg-myGray"
              >
                about us
              </a>
            </Link>
            {/* To Home page */}
            <button
              onClick={homeBtnClicked}
              className="w-48 py-2 border-2 rounded-md bg-opacity-20 border-myGray text-myGray bg-myGray"
            >
              skip
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
}
