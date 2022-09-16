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
      {/* ✉️ 유튜브 프리미엄 사용자만 자동재생 사용하기 */}
      <YoutubeWrapper />
      <div className="grid grid-cols-2 overflow-scroll text-sm p-7 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-7 bg-myNavy text-myGray ">
        {loadData?.data.searchVideos.map((video) => (
          <div key={Math.random().toString(36).substring(2, 11)}>
            <VideoLpBox video={video} />
          </div>
        ))}
      </div>
    </>
  );
}
