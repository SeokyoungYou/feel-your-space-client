import { useGetVideoInfosQuery } from "generated";
import Image from "next/image";
import dbData from "../db.json";
export default function Videos() {
  const loadData = dbData.Videos[0];
  console.log(loadData);
  const keywords = loadData.keywords;
  const box = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
  return (
    // hover transition 자연스럽게
    <div className="grid grid-cols-2 overflow-scroll hover:h-4/5 lg:hover:h-screen p-7 md:grid-cols-3 2xl:grid-cols-4 gap-7 bg-myNavy text-myGray h-2/5 lg:h-screen lg:w-3/5 xl:w-2/3">
      {loadData?.data.searchVideos.map((video) => (
        <div className="h-60" key={video.id}>
          <div className="relative h-3/5 bg-myRed">
            <Image
              src={video.snippet.thumbnails.high.url}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              alt="channelThumnail"
            />
            <span className="absolute px-3 rounded-sm bg-opacity-90 text-myBlack bg-myGray bottom-1 right-1">
              {video.infos.contentDetails.duration}
            </span>
          </div>
          <div>
            <span>{video.snippet.title}</span>
            <div className="flex ">
              <div className="relative w-5 h-5 rounded-full bg-myRed">
                <Image
                  src={video.snippet.channelThumbnail}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  alt="channelThumnail"
                />
              </div>
              <span>{video.snippet.channelId}</span>
            </div>
            <div className="flex ">
              <span className="">123 Views ·</span>
              <span>9.5 K likes</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
