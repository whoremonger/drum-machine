
import { useState, useRef, useEffect } from 'react'
import { Button, Card, Row, Col } from 'react-materialize'
import DrumPad from './DrumPad'


//next add css library ill do materialize this time
//uses react-materialize 2.5.2
//in each each click/key event add innerHTML the name of the clip or sound being pressed

//Make the audio clip play without the audio controls (use onClick event handlers)
function DrumMachine() {
  //const [selectedClip, setSelectedClip] = useState(null)
  //const audioRef = useRef(null)
  const [volume, setVolume] = useState(0.5)
  //const [pressKey, setPressKey] = useState("")
  const [text, setText] = useState("")
  //const audioRef = useRef(null)


  const drumData = [
    { id: "Q", shout: "Rock on!", keyTrigger: "Q", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3"},
    { id: "W", shout: "Groovy!", keyTrigger: "W", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3" },
    { id: "E", shout: "Tubular!", keyTrigger: "E", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3" },
    { id: "A", shout: "Awesome!", keyTrigger: "A", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3" },
    { id: "S", shout: "Way Cool!", keyTrigger: "S", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3" },
    { id: "D", shout: "Cowabunga!!", keyTrigger: "D", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3" },
    { id: "Z", shout: "Nigga Pleease!", keyTrigger: "Z", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3" },
    { id: "X", shout: "Radical!", keyTrigger: "X", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3" },
    { id: "C", shout: "Gnarley!", keyTrigger: "C", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3" },
  ]
/*
  useEffect(() => {
    function handleKeyPress(e) {
      const sound = drumData.find(s => s.letter === e.key.toUpperCase())
      if (sound) {
        const audio = new Audio(sound.src)
        setText(sound.id)
        audio.volume = volume
        audio.play()
      } 
    }

    document.addEventListener('keydown', handleKeyPress)
    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [volume])
*/
  function playAudio(audioRef, soundText) {
    //const audio = new Audio(drumSource)
    const audio = audioRef.current
    if (audio) {
      audio.currentTime = 0
      audio.volume = volume
      audio.play()
      setText(soundText)
    } 
  }

  function handleKeyPress(e) {
    const key = e.key.toUpperCase()
    const sound = drumData.find(s => s.keyTrigger === key)
    if (sound) {
      const audioRef = document.getElementById(sound.keyTrigger).querySelector("audio")
      playAudio({ current: audioRef }, sound.shout)
    }
  }
  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress)
    return () => {
      document.removeEventListener("keydown", handleKeyPress)
    }
  }, []) 
  function handleVolumeChange(e) {
    setVolume(e.target.value)
  }

  return (
      <div className="container" id="drum-machine">
        <h1>Drum Machine</h1>
          <div id="display">
            {drumData.map((item) => (
              <DrumPad key={item.id} divId={item.id} audioSrc={item.src} className="drum-pad" audioId={item.id} playAudio={playAudio} keyTrigger={item.keyTrigger} soundText={item.shout}>
                {item.id}
              </DrumPad>
              
            ))}
              {text && <h3>{text}</h3>}
            <div>
              <label htmlFor="volume"><h5>Volume</h5></label>
              <input id="volume" type="range" min="0" max="1" step="0.01" value={volume} onChange={handleVolumeChange}/>
            </div>
          </div> 
              
      </div>   
  )

}
//Put this in drumData.map()
//<Button key={item.letter} onClick={() => playAudio(item.src, item.id)} className="clip" id={item.letter}>{item.letter}</Button>
export default DrumMachine



//key press to audio source is wrong for now.