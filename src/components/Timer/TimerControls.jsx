import { useContext } from "react"
import { TimerContext } from "./Timer"


const TimerControls = () => {

  const { pauseTimer, resumeTimer, resetTimer } = useContext(TimerContext)

  return (
    <div className="timer-controls">
      <button onClick={pauseTimer}>Pause</button>
      <button onClick={resumeTimer}>Resume</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  )
}

export default TimerControls