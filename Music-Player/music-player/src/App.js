import { useRef, useState } from 'react';
import './App.css';

function App() {

  const [currentMusicDetails, setCurrentMusicDetails] = useState({
    songName: 'Infected',
    songArtist: 'NEFFEX',
    songSrc: './Assets/Songs/Infected.m4a',
    songAvatar: './Assets/Image/IMG-20230827-WA0024.jpg',
  })

  const [audioProgress, setAudioProgress] = useState(0);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [musicIndex, setMusicIndex] = useState(0);
  const [musicTotalLength, setMusicTotalLength] = useState('04 : 38');
  const [musicCurrentTime, setMusicCurrentTime] = useState('00 : 00');

  const currentAudio = useRef();

  const handleMusicProgressBar = (e) => {
    setAudioProgress(e.target.value);
    currentAudio.current.currentTime = e.target.value * currentAudio.current.duration / 100;
  }

  const handleAudioPlay = () => {
    if (currentAudio.current.paused) {
      currentAudio.current.play();
      setIsAudioPlaying(true)
    }
    else {
      currentAudio.current.pause();
      setIsAudioPlaying(false)
    }
  }

  const musicAPI = [
    {
      songName: 'Infected',
      songArtist: 'NEFFEX',
      songSrc: './Assets/Songs/Infected.m4a',
      songAvatar: './Assets/Image/IMG-20230827-WA0005.jpg',
    },
    {
      songName: 'After dark x sweater weather',
      songArtist: 'NEFFEX',
      songSrc: './Assets/Songs/After dark x sweater weather.m4a',
      songAvatar: './Assets/Image/IMG-20230827-WA0004.jpg',
    },
    {
      songName: 'INTERWORLD - Rapture',
      songArtist: 'NEFFEX',
      songSrc: './Assets/Songs/INTERWORLD - Rapture.m4a',
      songAvatar: './Assets/Image/IMG-20230827-WA0006.jpg',
    },
    {
      songName: 'Metamorphosis 2',
      songArtist: 'NEFFEX',
      songSrc: './Assets/Songs/Metamorphosis 2.m4a',
      songAvatar: './Assets/Image/IMG-20230827-WA0018.jpg',
    },
    {
      songName: 'Save your tears',
      songArtist: 'NEFFEX',
      songSrc: './Assets/Songs/Save your tears.m4a',
      songAvatar: './Assets/Image/IMG-20230827-WA0013.jpg',
    },
    {
      songName: 'The grinch',
      songArtist: 'NEFFEX',
      songSrc: './Assets/Songs/The grinch.m4a',
      songAvatar: './Assets/Image/IMG-20230827-WA0023.jpg',
    },
  ]

  const handlePrevSong = () => {
    if (musicIndex === 0) {
      let setNumber = musicAPI.length - 1;
      setMusicIndex(setNumber);
      updateCurrentMusicDetails(setNumber);
    }
    else {
      let setNumber = musicIndex - 1;
      setMusicIndex(setNumber)
      updateCurrentMusicDetails(setNumber);
    }
  }

  const handleNextSong = () => {
    if (musicIndex >= musicAPI.length - 1) {
      let setNumber = 0;
      setMusicIndex(setNumber);
      updateCurrentMusicDetails(setNumber);
    }
    else {
      let setNumber = musicIndex + 1;
      setMusicIndex(setNumber)
      updateCurrentMusicDetails(setNumber);
    }
  }

  const updateCurrentMusicDetails = (number) => {
    let musicObject = musicAPI[number];
    setCurrentMusicDetails(
      {
        songName: musicObject.songName,
        songArtist: musicObject.songArtist,
        songSrc: musicObject.songSrc,
        songAvatar: musicObject.songAvatar,
      }
    )
    if (currentAudio.current) {
      currentAudio.current.pause();
    }

    // Change the audio source
    currentAudio.current.src = musicObject.songSrc;

    // Auto-play when the audio is ready
    currentAudio.current.oncanplay = () => {
      currentAudio.current.play().catch(error => {
        console.error('Error playing audio:', error);
      });
      setIsAudioPlaying(true);
    };
  }

  const handleAudioUpdate = () => {
    //total audio length
    let minutes = Math.floor(currentAudio.current.duration / 60);
    let seconds = Math.floor(currentAudio.current.duration % 60);
    let musicTotalLength0 = `${minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}` : seconds}`;
    setMusicTotalLength(musicTotalLength0);

    //current music time
    let currentMin = Math.floor(currentAudio.current.currentTime / 60);
    let currentSec = Math.floor(currentAudio.current.currentTime % 60);
    let musicCurrentT = `${currentMin < 10 ? `0${currentMin}` : currentMin} : ${currentSec < 10 ? `0${currentSec}` : currentSec}`;
    setMusicCurrentTime(musicCurrentT);

    const progress = parseInt((currentAudio.current.currentTime / currentAudio.current.duration) * 100);
    setAudioProgress(isNaN(progress) ? 0 : progress)
  }

  return (
    <>
      <div className="container">
        {/* <audio src={currentMusicDetails.songSrc} ref={currentAudio}></audio> */}
        {/* play next song on end automatically using:  onEnded={handleNextSong} */}
        <audio src='./Assets/Songs/Infected.m4a' ref={currentAudio} onTimeUpdate={handleAudioUpdate}></audio>
        <div className="blackScreen"></div>
        <div className="music-Container">
          <p className="musicPlayer">Music Player</p>
          <p className="music-Head-Name">{currentMusicDetails.songName}</p>
          <p className="music-Artist-Name">{currentMusicDetails.songArtist}</p>
          <img src={currentMusicDetails.songAvatar} alt="song Avatar" id='songAvatar' />
          <div className="musicTimerDiv">
            <p className="musicCurrentTime">{musicCurrentTime}</p>
            <p className="musicCurrentLength">{musicTotalLength}</p>
          </div>
          <input type="range" name="musicProgressBar" className="musicProgressBar" value={audioProgress} onChange={handleMusicProgressBar} />
          <div className="musicControllers">
            <i className="fa-solid fa-backward musicController" onClick={handlePrevSong}></i>
            <i className={`fa-solid ${isAudioPlaying ? 'fa-pause-circle' : 'fa-circle-play'} playBtn`} onClick={handleAudioPlay}></i>
            <i className="fa-solid fa-forward musicController" onClick={handleNextSong}></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
