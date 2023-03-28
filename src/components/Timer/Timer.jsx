import { useEffect, useState } from "react"
import TimerDisplay from "./TimerDisplay"
import TimerControls from "./TimerControls"
import TimerForm from "../TimerForm/TimerForm"
import timerContext from "../../context/timerContext"


export const TimerContext = timerContext()


const Timer = () => {

  const [timeLeft, setTimeLeft] = useState(0)
  const [timerOn, setTimerOn] = useState(false)


  useEffect(() => {
    let interval
    if (timerOn && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(timeLeft - 1)
      }, 1000)
    }
    return () => clearInterval(interval)
  }, [timeLeft, timerOn])


  const startTimer = (duration) => {
    setTimeLeft(duration)
    setTimerOn(true)
  }

  const pauseTimer = () => {
    setTimerOn(false)
  }

  const resumeTimer = () => {
    setTimerOn(true)
  }

  const resetTimer = () => {
    setTimeLeft(0)
    setTimerOn(false)
  }


  return (
    <div className="timer">
      <TimerContext.Provider value={{ timeLeft, startTimer, pauseTimer, resumeTimer, resetTimer }}>
        <TimerDisplay />
        <TimerControls />
        <TimerForm />
      </TimerContext.Provider>
    </div>
  )
}

export default Timer