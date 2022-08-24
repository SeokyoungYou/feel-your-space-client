import { useGetVideoInfosQuery } from "generated";
import Image from "next/image";
import Link from "next/link";
import dbData from "../db.json";
export default function Videos() {
  const loadData = dbData.Videos[1];
  // console.log(loadData);
  const keywords = loadData.keywords;

  return (
    // hover transition 자연스럽게
    <div className="grid grid-cols-2 overflow-scroll text-sm p-7 md:grid-cols-3 2xl:grid-cols-4 gap-7 bg-myNavy text-myGray h-2/5 lg:h-screen lg:w-3/5 xl:w-2/3">
      {loadData?.data.searchVideos.map((video) => (
        <div className="h-60" key={video.id}>
          <div className="relative flex justify-center h-32 overflow-hidden ">
            <div className="relative transition-all border-2 rounded-full w-44 h-44 hover:animate-spin-slow border-myGray">
              <Image
                className="rounded-full "
                src={video.snippet.thumbnails.high.url}
                // layout="responsive"
                // width="100%"
                // height="120%"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                alt="videoThumnail"
              />
            </div>
            <div className="absolute w-12 h-12 bg-opacity-50 border-2 rounded-full top-1/2 bg-myGray border-opacity-60 border-myGray">
              {/* <Image
                className="opacity-50 "
                src="/logo.png"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                alt="mainLogo"
              /> */}
            </div>
          </div>
          <Link href={video.url}>
            <a target="_blank">
              <div className="relative z-10 p-2 cursor-pointer h-28 bg-myGray text-myBlack">
                <span className="absolute right-0 px-3 rounded-sm bg-opacity-90 text-myBlack bg-myGray -top-6">
                  {video.infos.contentDetails.duration
                    .slice(2)
                    .split("H")
                    .join(":")
                    .split("M")
                    .join(":")
                    .split("S")}
                </span>
                <div className="h-16 overflow-hidden ">
                  {video.snippet.title}
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <div className="relative w-5 h-5 rounded-full bg-myRed">
                    <Image
                      className="rounded-full"
                      src={video.snippet.channel.thumbnails.high.url}
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                      alt="channelThumnail"
                    />
                  </div>
                  <span>{video.snippet.channel.title}</span>
                </div>
                <div className="flex text-xs">
                  <span className="">{video.infos.statistics.viewCount} ·</span>
                  <span>{video.infos.statistics.likeCount} likes</span>
                </div>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}
