import "./VideoPlayer.css";
import college_video from "../../assets/college-video.mp4";
import { useRef } from "react";

const VideoPlayer = ({ playVideo, setPlayVideo }) => {
  const player = useRef(null);

  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlayVideo(false);
    }
  };

  return (
    <div
      className={`video-player ${playVideo ? "" : "hide"}`}
      ref={player}
      onClick={closePlayer}
    >
      <video src={college_video} autoPlay muted controls></video>
    </div>
  );
};

export default VideoPlayer;
