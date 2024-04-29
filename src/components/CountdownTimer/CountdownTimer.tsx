'use client'

import { useEffect, useRef, useState } from "react"
import "./CountdownTimer.scss";

interface CountdownTimerProps {
    targetDate: string // Format: 'YYYY-MM-DDTHH:mm:ss' - The target date and time for the countdown timer.
    labels: string[]
}

// Calculates the time left until the target date and returns an array of days, hours, minutes, and seconds.
const calculateTimeLeft = (targetDate: Date): number[] => {
    const difference = targetDate.getTime() - new Date().getTime()

    return difference > 0
    ? [
        Math.floor(difference / (1000 * 60 * 60 * 24)), // Days
        Math.floor(difference / (1000 * 60 * 60) % 24), // Hours
        Math.floor(difference / (1000 * 60) % 60), // Minutes
        Math.floor(difference / 1000) % 60 // Seconds
    ]
    :
    [0, 0, 0, 0] // zeros instead of undefined or null
}

// CountdownTimer component displays a countdown timer based on the target date and labels provided.
export const CountdownTimer = ({targetDate, labels}: CountdownTimerProps) => {
    const [timeLeft, setTimerLeft] = useState(calculateTimeLeft(new Date(targetDate))) // State to hold the time left until the target date.
    const [hasMounted, setHasMounted] = useState(false) // State to track if the component has mounted.
    const prevTimeLeft = useRef(timeLeft)

    useEffect(() => {
        setHasMounted(true) // Set hasMounted to true when the component mounts.

        if (hasMounted) {
            // Update the time left at every second interval.
            const interval = setInterval(() => {
                setTimerLeft(calculateTimeLeft(new Date(targetDate)))
                prevTimeLeft.current = timeLeft
            }, 1000)

            // Clean up the interval when the component unmounts.
            return () => clearInterval(interval)
        }
    }, [targetDate, hasMounted, timeLeft])

    if (!hasMounted) return <div>Loading....</div> // Display a loading message if the component has not yet mounted.

    // Render the countdown timer UI.
    return (
          <div className="timer">
            {timeLeft.map((num, index) => (
              <div key={index} className="timer__card">
                <div className="timer__card-visual">
                <div className="timer__card-elements">              
                  <div className="line"></div>
                  <div className="circle"></div>
                  <div className={`${num !== prevTimeLeft.current[index] ? 'flipper': ''}`}></div>
                  <span className="timer__card-num">{String(num).padStart(2, '0')}</span>              
                  </div>  
                </div>
                <p className="timer__card-val">{labels[index]}</p>
                </div>
            ))}
          </div>
      );
}