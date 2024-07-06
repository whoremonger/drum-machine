import { Button } from 'react-materialize'
import { useRef, useEffect, useState } from 'react'

function DrumPad({padOnClick, padClassName, buttonId, children, audioClassName, audioId, audioSrc}) {
  

/*
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
*/
 
  return (
    <Button onClick={padOnClick} className={padClassName} id={buttonId}>
      <audio preload="auto" className={audioClassName} id={audioId} src={audioSrc}></audio>{children}
    </Button>     

  )


  {/*
    <div className={className} id={divId}>
      <Button id={keyTrigger} onClick={handleClick}>
        {keyTrigger}
        <audio preload="auto" className="clip" id={audioId} ref={audioRef} src={audioSrc}></audio>
      </Button>
    </div>
  */}
 
}

export default DrumPad