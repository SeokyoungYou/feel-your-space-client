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
    <div
      className="cursor-pointer h-76 group "
      onMouseEnter={enterLp}
      onMouseLeave={leaveLp}
    >
      {/* Pre-listen while hovering on lp */}
      {/* ✉️ Implement pre-listen and add headset cursor in css */}
      <Link href={video?.url}>
        <a target="_blank">
          <div className="relative flex justify-center h-40 overflow-hidden ">
            <div className="relative overflow-hidden transition-all rounded-full group-hover:ease-in-out mt-14 w-44 h-44 group-hover:mt-0 group-hover:animate-spin-slow border-myGray">
              <Image
                priority
                src="/lpLogo.svg"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                alt="videoThumnail"
              />
            </div>
          </div>
          {/* Link to youtube page */}
          {/* ✉️ Implement your own video modal */}
          <div className="relative z-10 p-2 rounded-sm bg-myGray text-myBlack">
            <span className="absolute right-0 px-3 rounded-sm bg-opacity-90 text-myBlack bg-myGray -top-6">
              {video.infos?.contentDetails.duration
                .slice(2)
                .split("H")
                .join(":")
                .split("M")
                .join(":")
                .split("S")}
            </span>
            <Image
              className="rounded-sm group-hover:opacity-0"
              priority
              src={video.snippet?.thumbnails.high.url}
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              alt="videoThumnail"
            />
            <div className="h-16 overflow-hidden ">{video.snippet?.title}</div>
            <div className="flex items-center gap-2 text-xs">
              <div className="relative w-5 h-5 rounded-full bg-myRed">
                <Image
                  className="rounded-full"
                  src={video.snippet?.channel.thumbnails.high.url}
                  layout="fill"
                  objectFit="cover"
                  objectPosition="top"
                  alt="channelThumnail"
                />
              </div>
              <span className="h-5 overflow-hidden">
                {video.snippet?.channel.title}
              </span>
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
