import NavButton from "@components/NavButton";
import NextApolloProvider from "@graphql/apolloClient";
import type { AppProps } from "next/app";
import Link from "next/link";

import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({ Component, pageProps }: AppProps) {
  const route = useRouter();
  return (
    <NextApolloProvider>
      <div className="flex flex-col w-screen h-screen lg:flex-row">
        <div className="flex flex-col items-center bg-myGray text-myNavy h-3/5">
          <nav className="relative flex justify-between h-20 px-5 -mt-4 overflow-hidden border-b-2 w-80 border-b-myNavy">
            <NavButton href="/" title="HOME" />
            <NavButton href="/trending" title="TRENDING" />
            <NavButton href="/login" title="LOGIN" />
          </nav>
          <div className="flex flex-col ">
            <h1 className="text-5xl ">Feel your space</h1>
            {route.pathname === "/" ? (
              <div className="flex items-center mt-1">
                <h1 className="text-5xl ">Fill your</h1>
                {/* change search div to input tag */}
                <div className="flex items-center w-56 h-10 gap-1 pl-1 ml-2 border-2 rounded-lg text-opacity-60 text-myLightNavy text-md border-myNavy">
                  <FontAwesomeIcon icon={faSearch} />
                  <span>Search</span>
                </div>
              </div>
            ) : null}
          </div>
          <Component {...pageProps} />
        </div>
        {/* Search results */}
        <div className=" bg-myNavy text-myGray h-2/5">
          <h2>Results</h2>
        </div>
      </div>
    </NextApolloProvider>
  );
}

export default MyApp;
