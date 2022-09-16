import YouTube, { YouTubeProps } from "react-youtube";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { videoIdState } from "states";
export default function YoutubeWrapper() {
  const videoId = useRecoilValue(videoIdState);
  console.log(`YoutubeWrapper:${videoId}`);
  // Player error 1: Changing videoId is so fast
  // Player error 2: Changing videoId before Youtube copmponent loaded
  // Player error 3: AutoPlay does not work
  return (
    <div style={{ position: "absolute", zIndex: -99 }}>
      {/* Install react-youtube to use this component */}
      <YouTube
        // Synchronize videoId from recoil state
        videoId={videoId}
        opts={{
          width: "200",
          height: "150",
          playerVars: {
            autoplay: 1, //자동재생 ✉️
            rel: 0, //관련 동영상 표시하지 않음 (근데 별로 쓸모 없는듯..)
            modestbranding: 1, // 컨트롤 바에 youtube 로고를 표시하지 않음
          },
        }}
        //이벤트 리스너
        onEnd={(e) => {
          e.target.stopVideo(0);
        }}
      />
    </div>
  );
}
