import { createContext, useContext, useEffect, useState } from "react";

const MusicContext = createContext();

const songs = [
  {
    id: 1,
    title: "Emitemito",
    artist: "Alphonse",
    url: "/songs/Emitemito.mp3",
    duration: "3:23",
  },
  {
    id: 2,
    title: "Hamsaro",
    artist: "A.R.Rehman",
    url: "/songs/Hamsaro.mp3",
    duration: "3:45",
  },
  {
    id: 3,
    title: "Harima Harima",
    artist: "Hariharan",
    url: "/songs/Harima Harima.mp3",
    duration: "5:19",
  },
  {
    id: 4,
    title: "Sahana Sahana",
    artist: "Vishal Mishra",
    url: "/songs/Sahana Sahana.mp3",
    duration: "4:18",
  },
  {
    id: 5,
    title: "Ney Veyrey",
    artist: "Karthik",
    url: "/songs/Ney Veyrey.mp3",
    duration: "4:31",
  },
  {
    id: 6,
    title: "Nenante Naaku",
    artist: "Devi Sri Prasad",
    url: "/songs/Nenante Naaku.mp3",
    duration: "4:03",
  },
  {
    id: 7,
    title: "Oy Oy",
    artist: "Siddharth",
    url: "/songs/Oy Oy.mp3",
    duration: "4:42",
  },
  {
    id: 8,
    title: "Ninnu Chuse Anandamlo",
    artist: "Sid Sriram",
    url: "/songs/Ninnu Chuse Anandamlo.mp3",
    duration: "4:55",
  },
  {
    id: 9,
    title: "Pillaa Raa",
    artist: "Anurag Kulakarni",
    url: "/songs/Pillaa Raa.mp3",
    duration: "3:57",
  },
  {
    id: 10,
    title: "Kaathalae Kaathalae",
    artist: "Kalyani Menon",
    url: "/songs/Kaathalae Kaathalae.mp3",
    duration: "3:13",
  },
];

export const MusicProvider = ({ children }) => {
  const [allSongs, setAllSongs] = useState(songs);
  const [currentTrack, setCurrentTrack] = useState(songs[0]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    const savedPlaylists = localStorage.getItem("musicPlayerPlaylists");
    if (savedPlaylists) {
      const playlists = JSON.parse(savedPlaylists);
      setPlaylists(playlists);
    }
  }, []);

  useEffect(() => {
    if (playlists.length > 0) {
      localStorage.setItem("musicPlayerPlaylists", JSON.stringify(playlists));
    } else {
      localStorage.removeItem("musicPlayerPlaylists");
    }
  }, [playlists]);

  const handlePlaySong = (song, index) => {
    setCurrentTrack(song);
    setCurrentTrackIndex(index);
    setIsPlaying(true);
  };

  const nextTrack = () => {
    setCurrentTrackIndex((prev) => {
      const nextIndex = (prev + 1) % allSongs.length;
      setCurrentTrack(allSongs[nextIndex]);
      return nextIndex;
    });
  };

  const prevTrack = () => {
    setCurrentTrackIndex((prev) => {
      const nextIndex = prev === 0 ? allSongs.length - 1 : prev - 1;
      setCurrentTrack(allSongs[nextIndex]);
      return nextIndex;
    });
  };

  const formatTime = (time) => {
    if (isNaN(time) || time === undefined) return "0:00";

    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);

    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const createPlaylist = (name) => {
    const newPlaylist = {
      id: Date.now(),
      name,
      songs: [],
    };

    setPlaylists((prev) => [...prev, newPlaylist]);
  };

  const deletePlaylist = (playlistId) => {
    setPlaylists((prev) =>
      prev.filter((playlist) => playlist.id != playlistId),
    );
  };

  const addSongToPlaylist = (playlistId, song) => {
    setPlaylists((prev) =>
      prev.map((playlist) => {
        if (playlist.id === playlistId) {
          return { ...playlist, songs: [...playlist.songs, song] };
        } else {
          return playlist;
        }
      }),
    );
  };

  const play = () => setIsPlaying(true);
  const pause = () => setIsPlaying(false);

  return (
    <MusicContext.Provider
      value={{
        allSongs,
        handlePlaySong,
        currentTrackIndex,
        setCurrentTrack,
        currentTrack,
        setCurrentTime,
        currentTime,
        formatTime,
        setDuration,
        duration,
        nextTrack,
        prevTrack,
        play,
        pause,
        isPlaying,
        volume,
        setVolume,
        createPlaylist,
        playlists,
        addSongToPlaylist,
        deletePlaylist,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
};

export const useMusic = () => {
  const contextValue = useContext(MusicContext);
  if (!contextValue) {
    throw new Error("useMusic must be used inside of MusicProvider");
  }

  return contextValue;
};
