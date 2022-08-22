import NavButton from "@components/NavButton";
import NextApolloProvider from "@graphql/apolloClient";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

import Title from "@components/Title";
import Videos from "@components/Videos";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

function MyApp({ Component, pageProps }: AppProps) {
  //Query 이름이랑 동작 바꾸고 result component 만들자

  return (
    <NextApolloProvider>
      <div className="flex flex-col w-screen h-screen lg:flex-row">
        <div className="flex flex-col items-center bg-myGray text-myNavy h-3/5 lg:h-screen lg:w-2/5 xl:w-1/3">
          <nav className="relative flex justify-between h-20 px-5 -mt-4 overflow-hidden border-b-2 w-80 border-b-myNavy">
            <NavButton href="/" title="HOME" />
            <NavButton href="/trending" title="TRENDING" />
            <NavButton href="/login" title="LOGIN" />
          </nav>
          <Title />
          <Component {...pageProps} />
        </div>
        <Videos />
      </div>
    </NextApolloProvider>
  );
}

export default MyApp;
