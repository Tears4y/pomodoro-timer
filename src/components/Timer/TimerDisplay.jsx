import { useContext } from "react"
import { TimerContext } from "./Timer"
import "../../App.css"


const TimerDisplay = () => {

  const { timeLeft } = useContext(TimerContext)
  const hours = Math.floor(timeLeft / 3600)
  const minutes = Math.floor((timeLeft - (hours * 3600)) / 60)
  const seconds = timeLeft % 60

  return (
    <div className="timer-display">
      <div>
        {
          `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
        }
      </div>
    </div>
  )
}

export default TimerDisplay