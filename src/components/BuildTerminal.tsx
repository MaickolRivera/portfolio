"use client"
import { useState, useEffect } from "react"

export default function BuildTerminal() {
  const steps = ["planeacion", "diseño", "desarrollo", "testing", "despliegue", "optimización"]
  const totalBlocks = 50
  const stepDuration = 2000
  const pauseAtEnd = 0

  const [stepIndex, setStepIndex] = useState(0)
  const [showRepeat, setShowRepeat] = useState(false)

  useEffect(() => {
    if (showRepeat) {
      const t = setTimeout(() => {
        setShowRepeat(false)
        setStepIndex(0)
      }, pauseAtEnd)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => {
      if (stepIndex < steps.length - 1) setStepIndex(stepIndex + 1)
      else setShowRepeat(true)
    }, stepDuration)
    return () => clearTimeout(t)
  }, [stepIndex, showRepeat])

  const percent = showRepeat ? 100 : Math.round(((stepIndex + 1) / steps.length) * 100)
  const filled = Math.round((percent / 100) * totalBlocks)

  return (
    <div className="w-85 md:w-170 overflow-hidden font-mono text-xs md:text-sm">
      <div className="flex items-center gap-2 py-2 border-b border-line">
        <p className="text-main">| {percent}% |</p>
        <span className="text-muted">$ build --status</span>
      </div>

      <div className="flex flex-row items-center gap-2 py-5">
        <div className="flex flex-row flex-1 gap-0.5 md:gap-1.5">
          {[...Array(totalBlocks)].map((_, i) => (
            <p key={i} className={`flex-1 max-w-2 ${i < filled ? "text-main" : "text-line"}`}>
              {i < filled ? <FilledItem/> : <EmptyItem/>}
            </p>
          ))}
        </div>
        
      </div>

      <div className="flex flex-row justify-between">
        {steps.map((step, i) => (
          <p
            key={step}
            className={`${i === stepIndex ? "" : "hidden md:block"} ${
              showRepeat ? "text-muted"
              : i === stepIndex ? "text-main"
              : i < stepIndex ? "text-line"
              : "text-muted"
            }`}
          >
            {i === stepIndex && !showRepeat ? `> ${step.toUpperCase()}_` : step.toUpperCase()}
          </p>
        ))}
      </div>
    </div>
  )
}

function FilledItem(){
    return(
        <div className="w-full h-5 bg-main"></div>
    )
}
function EmptyItem(){
    return(
        <div className="w-full h-5 bg-active"></div>
    )
}