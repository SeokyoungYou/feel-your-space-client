import { Id, useGetVideoInfosQuery } from "generated";
import Image from "next/image";
import Link from "next/link";
import { useRecoilState, useRecoilValue } from "recoil";
import { videoIdState } from "states";

interface VideoInterface {
  infos: {
    contentDetails: {
      duration: string;
    };
    statistics: {
      viewCount: string;
      likeCount: string;
    };
  };
  url: string;
  id: {
    videoId: string;
  };
  snippet: {
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: {
        url: string;
        width: number;
        height: number;
      };
      medium: {
        url: string;
        width: number;
        height: number;
      };
      high: {
        url: string;
        width: number;
        height: number;
      };
    };
    channel: {
      title: string;
      thumbnails: {
        default: {
          url: string;
          width: number;
          height: number;
        };
        medium: {
          width: number;
          url: string;
          height: number;
        };
        high: {
          url: string;
          width: number;
          height: number;
        };
      };
    };
  };
}

export default function VideoLpBox({ video }: VideoInterface) {
  const [videoId, setVideoId] = useRecoilState(videoIdState);

  const enterLp = () => {
    setVideoId(video.id.videoId);
    console.log(`Hover Lp:${video.id.videoId}`);
  };
  const leaveLp = () => {
    setVideoId("default");
  };
  return (
    <div className="h-60">
      {/* Pre-listen while hovering on lp */}
      {/* ✉️ Implement pre-listen and add headset cursor in css */}
      <div
        onMouseEnter={enterLp}
        onMouseLeave={leaveLp}
        className="relative flex justify-center h-32 overflow-hidden "
      >
        <div className="relative transition-all border-2 rounded-full w-44 h-44 hover:animate-spin-slow border-myGray">
          <Image
            priority
            className="rounded-full "
            src={video.snippet?.thumbnails.high.url}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt="videoThumnail"
          />
        </div>
        <div className="absolute w-12 h-12 bg-opacity-50 border-2 rounded-full top-1/2 bg-myGray border-opacity-60 border-myGray">
          {/* Main logo on the middle of lps */}
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
      {/* Link to youtube page */}
      {/* ✉️ Implement your own video modal */}
      <Link href={video?.url}>
        <a target="_blank">
          <div className="relative z-10 p-2 cursor-pointer h-28 bg-myGray text-myBlack">
            <span className="absolute right-0 px-3 rounded-sm bg-opacity-90 text-myBlack bg-myGray -top-6">
              {video.infos?.contentDetails.duration
                .slice(2)
                .split("H")
                .join(":")
                .split("M")
                .join(":")
                .split("S")}
            </span>
            <div className="h-16 overflow-hidden ">{video.snippet?.title}</div>
            <div className="flex items-center gap-2 text-xs">
              <div className="relative w-5 h-5 rounded-full bg-myRed">
                <Image
                  className="rounded-full"
                  src={video.snippet?.channel.thumbnails.high.url}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  alt="channelThumnail"
                />
              </div>
              <span>{video.snippet?.channel.title}</span>
            </div>
            <div className="flex text-xs">
              <span className="">{video.infos?.statistics.viewCount} ·</span>
              <span>{video.infos?.statistics.likeCount} likes</span>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}
