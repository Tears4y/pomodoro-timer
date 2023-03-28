import { useContext, useState } from "react"
import { TimerContext } from "../Timer/Timer"


const TimerForm = () => {

  const { startTimer } = useContext(TimerContext)
  const [duration, setDuration] = useState(0)

  const handleSubmit = e => {
    e.preventDefault()
    startTimer(duration)
  }

  const handleChange = e => {
    let timeLeft = 0
    const intValue = parseInt(e.target.value)
    if (e.target.value != "" && !isNaN(intValue)) {
      timeLeft = parseInt(e.target.value)
    }
    setDuration(timeLeft)
  }


  return (
    <div className="timer-form">
      <form onSubmit={handleSubmit}>
        <div className="timer-form-input">
          <input value={duration} onChange={handleChange} />
        </div>
        <div className="timer-form-button">
          <button type="submit">Start</button>
        </div>
      </form>
    </div>
  )
}

export default TimerForm