import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const audioRef = useRef();
  const seekBg = useRef();
  const seekBar = useRef();

  const [track, setTrack] = useState(songsData[0]);
  const [playStatus, setPlayStatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: {
      second: 0,
      minute: 0,
    },
    totalTime: {
      second: 0,
      minute: 0,
    },
  });

  const play = () => {
    audioRef.current.play().catch((err) => console.error(err));
    setPlayStatus(true);
  };

  const pause = () => {
    audioRef.current.pause();
    setPlayStatus(false);
  };

  const playTrackByIndex = (index) => {
    const nextTrack = songsData[index];
    if (!nextTrack || !audioRef.current) return;

    if (nextTrack.id === track.id) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((err) => console.error(err));
      setPlayStatus(true);
      return;
    }

    setTrack(nextTrack);
    setPlayStatus(true);
  };

  const playWithId = (id) => {
    const trackIndex = songsData.findIndex((song) => song.id === id);
    if (trackIndex === -1) return;
    playTrackByIndex(trackIndex);
  };

  const previous = () => {
    const currentIndex = songsData.findIndex((song) => song.id === track.id);
    if (currentIndex <= 0) return;
    playTrackByIndex(currentIndex - 1);
  };

  const next = () => {
    const currentIndex = songsData.findIndex((song) => song.id === track.id);
    if (currentIndex === -1 || currentIndex >= songsData.length - 1) return;
    playTrackByIndex(currentIndex + 1);
  };

  const seekSong = async (e) => {
    audioRef.current.currentTime =
      (e.nativeEvent.offsetX / seekBg.current.offsetWidth) *
      audioRef.current.duration;
  };

  useEffect(() => {
    if (!audioRef.current) return undefined;

    audioRef.current.ontimeupdate = () => {
      if (!seekBar.current) return;

      seekBar.current.style.width =
        Math.floor(
          (audioRef.current.currentTime / audioRef.current.duration) * 100,
        ) + "%";

      setTime({
        currentTime: {
          second: Math.floor(audioRef.current.currentTime % 60),
          minute: Math.floor(audioRef.current.currentTime / 60),
        },
        totalTime: {
          second: Math.floor(audioRef.current.duration % 60),
          minute: Math.floor(audioRef.current.duration / 60),
        },
      });
    };

    return () => {
      if (audioRef.current) {
        audioRef.current.ontimeupdate = null;
      }
    };
  }, []);

  useEffect(() => {
    if (!audioRef.current || !playStatus) return;
    audioRef.current.play().catch((err) => console.error(err));
  }, [track, playStatus]);

  const contextValue = {
    audioRef,
    seekBg,
    seekBar,
    track,
    setTrack,
    playStatus,
    setPlayStatus,
    time,
    setTime,
    play,
    pause,
    playWithId,
    previous,
    next,
    seekSong,
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
