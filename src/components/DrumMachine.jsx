
import { useState, useRef, useEffect } from 'react'
import { Button, Card, Row, Col } from 'react-materialize'
import DrumPad from './DrumPad'
import '../App.css'

//uses react-materialize 2.5.2

function DrumMachine() {
 
  const [volume, setVolume] = useState(0.5)
  const [shout, setShout] = useState("")
  const [pressedKey, setPressedKey] = useState(null)

  useEffect(() => {
    document.addEventListener('keydown', (e) => {
      playSound(e.key.toUpperCase())
    })

    return () => {
      document.removeEventListener('keydown', (e) => {
        playSound(e.key.toUpperCase())
      })
    }
  }, [volume])

//redesign the pads and machine to look good
//add volume bar
//upload to github
  const drumData = [
    { id: "Q", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3", shout: "Rock on!" },
    { id: "W", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3", shout: "Groovy!" },
    { id: "E", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3", shout: "Tubular!" },
    { id: "A", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3", shout: "Awesome!" },
    { id: "S", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3", shout: "Way Cool!" },
    { id: "D", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3", shout: "Cowabunga!" },
    { id: "Z", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3", shout: "Nigga Pleease!" },
    { id: "X", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3", shout: "Radical!" },
    { id: "C", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3", shout: "Gnarley!" }
  ]

  function playSound(selector) {
    const audio = document.getElementById(selector)
    const selectedDrum = drumData.find(s => s.id === selector)
    if (selectedDrum) {
      setShout(selectedDrum.shout)
      setPressedKey(selector)
    }
    if (audio) {
      audio.volume = volume
      audio.play()
    }
  
  }

  function handleVolumeChange(e) {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
  }

  return (
    <div className="container" id="drum-machine">
      <h1 className="title">Drum Machine</h1>
        <h3 id="display">{shout}</h3>
        <div className="drum-pads">
          {drumData.map((item) => (
            <DrumPad key={item.src} padOnClick={() => { playSound(item.id) }} 
              padClassName={`drum-pad ${pressedKey === item.id ? 'pressed': ""}`} 
              buttonId={item.src} 
              audioClassName="clip" 
              audioId={item.id} 
              audioSrc={item.src}>
              {item.id}
            </DrumPad>
          ))}
        </div>
        
        <div className="volume-bar">
          <label htmlFor="volume"><h5>Volume</h5></label>
          <input id="volume" type="range" min="0" max="1" step="0.01" value={volume} onChange={handleVolumeChange} className="volume-slider"/>
        </div>  
    </div>        
  )

}

export default DrumMachine

