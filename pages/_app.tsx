import NavButton from "@components/NavButton";
import NextApolloProvider from "@graphql/apolloClient";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

import Title from "@components/Title";
import Videos from "@components/Videos";
import { Router, useRouter } from "next/router";
import Image from "next/image";
import HomeIntro from "@components/HomeIntro";
import { useEffect, useState } from "react";
import { RecoilRoot } from "recoil"; //State management tool
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <NextApolloProvider>
        <div>
          <HomeIntro />
          <div className="relative flex flex-col w-screen h-screen">
            {/* COMPONENT 1 */}
            <div className="flex flex-col items-center w-screen bg-myGray text-myNavy ">
              <nav className="relative flex justify-between h-20 px-5 -mt-4 overflow-hidden border-b-2 w-80 border-b-myNavy">
                <NavButton href="/" title="HOME" />
                <NavButton href="/trending" title="TRENDING" />
                <NavButton href="/login" title="LOGIN" />
              </nav>
              <Title />
            </div>
            <Component {...pageProps} />
            {/* COMPONENET 2 */}
          </div>
        </div>
      </NextApolloProvider>
    </RecoilRoot>
  );
}

export default MyApp;
