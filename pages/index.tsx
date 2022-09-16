import HomeIntro from "@components/HomeIntro";
import NavButton from "@components/NavButton";
import Title from "@components/Title";
import Videos from "@components/Videos";
import { NextPage } from "next";
const Home: NextPage = () => {
  return (
    <div className=" bg-[#2D4263] bg-opacity-20 ">
      <h1>Search</h1>
      <Videos />
    </div>
  );
};

export default Home;
