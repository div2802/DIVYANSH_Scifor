import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {
  const [musicData, setMusicData] = useState([]);
  const [selectedSong, setSelectedSong] = useState('');

  // Fetch music data from local JSON file
  useEffect(() => {
    fetch('/Assets/musicData.json') // Local path to the JSON file
      .then(response => response.json())
      .then(data => {
        console.log('Fetched music data:', data); // Check if data is correct
        setMusicData(data)
      })
      .catch(error => console.error('Error fetching music data:', error));
  }, []);

  // Handle song selection
  const handleSongSelect = (file) => {
    const songUrl = `/Assets/${file}`;
    console.log('Selected song URL:', songUrl); // Log the selected song URL
    setSelectedSong(songUrl);
  };

  useEffect(() => {
    const audioElement = document.getElementById('audioPlayer');
    if (audioElement) {
      console.log('Reloading audio element');
      audioElement.load(); // Reloads the audio element when selectedSong changes
    }
  }, [selectedSong]);

  return (
    <div className="App">
      <h1>Local Music Player</h1>

      <div>
        <h2>Select a Song</h2>
        <ul>
          {musicData.map((song) => (
            <li key={song.file}>
              <button onClick={() => handleSongSelect(song.file)}>
                {song.name} - {song.artist}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <audio id="audioPlayer" controls>
          <source src={selectedSong} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <audio controls>
          <source src="/Assets/Songs/The lost soul down X Lost soul.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <p>Selected song URL: {selectedSong}</p>
      </div>
    </div>
  );
};

export default App;

// ,
//     {
//         "name": "Song 2",
//         "artist": "Artist B",
//         "file": "https://your-site.github.io/assets/song2.mp3"
//     },
//     {
//         "name": "Song 3",
//         "artist": "Artist C",
//         "file": "https://your-site.github.io/assets/song3.mp3"
//     }