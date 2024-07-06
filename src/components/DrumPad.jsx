import { Button } from 'react-materialize'
import { useRef, useEffect, useState } from 'react'

function DrumPad({padOnClick, padClassName, buttonId, children, audioClassName, audioId, audioSrc}) {
  

  return (
    <Button onClick={padOnClick} className={padClassName} id={buttonId}>
      <audio preload="auto" className={audioClassName} id={audioId} src={audioSrc}></audio>{children}
    </Button>     

  )

}

export default DrumPad