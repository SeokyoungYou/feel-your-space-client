import dbData from "../VideoDB.json";
import VideoLpBox from "./VideoLpBox";
import YoutubeWrapper from "./YoutubeWrapper";

export default function Videos() {
  const loadData = dbData.Videos[1];
  // console.log(loadData?.data.searchVideos[0]);
  const keywords = loadData.keywords;

  return (
    // hover transition 자연스럽게
    <>
      <YoutubeWrapper />
      <div className="grid grid-cols-2 overflow-scroll text-sm p-7 md:grid-cols-3 2xl:grid-cols-4 gap-7 bg-myNavy text-myGray h-1/2 lg:h-screen lg:w-3/5 xl:w-2/3">
        {loadData?.data.searchVideos.map((video) => (
          <div key={Math.random().toString(36).substring(2, 11)}>
            <VideoLpBox video={video} />
          </div>
        ))}
      </div>
    </>
  );
}
