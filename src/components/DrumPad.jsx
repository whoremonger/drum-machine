import { Button } from 'react-materialize'
import { useRef, useEffect } from 'react'
//Individual drum pad design for the drum-machine component
//focuses on the looks and passes the data of each button
function DrumPad({divId, audioId, className, audioSrc, playAudio, soundText, keyTrigger, volume}) {
  const audioRef = useRef(null)
  //const [text, setText] = useState("")

  function handleClick() {
    playAudio(audioRef, soundText, volume)
  }

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key.toUpperCase() === keyTrigger) {
        playAudio(audioRef, soundText, volume)
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [keyTrigger, playAudio, soundText, volume])
 
    


  //Redo all this: 
/*
  componentDidMount() 
  {
    document.addEventListener('keydown', this.handleKeyDown)
    window.focus()
  }

  componentWillUnmount() 
  {
    document.removeEventListener('keydown', this.handleKeyDown)
  }
*/

/*
  function handleKeyDown(e) {
    if (e.keyCode === this.props.letter.charCodeAt()) {
      this.audio.play()
      this.audio.currentTime = 0
      this.props.handleDisplay(this.props.id)
    }
  }


  const drumData = [
    { id: "Rock on!", letter: "Q", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3" },
    { id: "Groovy!", letter: "W", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3" },
    { id: "Tubular!", letter: "E", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3" },
    { id: "Awesome!", letter: "A", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3" },
    { id: "Way Cool!", letter: "S", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3" },
    { id: "Nigga Pleease!", letter: "Z", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3" },
    { id: "Radical!", letter: "X", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3" },
    { id: "Gnarley", letter: "C", src: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3" },
  ]

  function handleClick() {
    this.audio.play()
    this.audio.currentTime = 0
    this.handleDisplay(this.id)
  }
*/
  return (
  
    <div className={className} id={divId}>
      <Button id={keyTrigger} onClick={handleClick}>
        {keyTrigger}
        <audio className="clip" id={audioId} ref={audioRef} src={audioSrc}></audio>
      </Button>
    </div>
   
  )  
}

export default DrumPad