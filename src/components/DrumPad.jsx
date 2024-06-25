import { Button } from 'react-materialize'

//Individual drum pad design for the drum-machine component
//focuses on the looks and passes the data of each button
function DrumPad({id, className, letter, children, onClick, src}) {


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
  
    <div className={className} key={letter} id={id}>
      <Button onClick={onClick}><audio id={id} src={src} className="clip"></audio>{children}</Button>
    </div>
   
  )  
}

export default DrumPad