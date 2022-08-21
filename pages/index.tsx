import { useQuery } from "@apollo/client";
import { useGetVideoInfosQuery } from "generated";

import { NextPage } from "next";

const Home: NextPage = () => {
  const { data, error, loading } = useGetVideoInfosQuery();

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>{error?.message}</div>;
  return (
    <div>
      <div className=" bg-[#2D4263] bg-opacity-20">
        <h1>Search</h1>
      </div>
      {/* <div>{data?.searchVideos[0]?.url}</div> */}
    </div>
  );
};

export default Home;
