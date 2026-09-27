"use client"
import { useState, useEffect } from "react"

const steps = ["planeacion", "diseño", "desarrollo", "testing", "despliegue", "optimización"]
const totalBlocks = 35
const stepDuration = 2000

export default function BuildTerminal() {
  const [stepIndex, setStepIndex] = useState(0)

  useEffect(() => {
    const t = setTimeout(() => setStepIndex((stepIndex + 1) % steps.length), stepDuration)
    return () => clearTimeout(t)
  }, [stepIndex])

  const percent = Math.round(((stepIndex + 1) / steps.length) * 100)
  const filled = Math.round((percent / 100) * totalBlocks)

  return (
    <div className="w-80 md:w-158 overflow-hidden font-mono text-xs md:text-sm">
      <div className="flex items-center gap-2 py-2 border-b border-line">
        <p className="text-main">| {percent}% |</p>
        <span className="text-muted">$ build --status</span>
      </div>

      <div className="flex flex-row gap-0.5 md:gap-1.5 py-5">
        {[...Array(totalBlocks)].map((_, i) => (
          <span key={i} className={`flex-1 max-w-full h-6 ${i < filled ? "bg-main" : "bg-active"}`} />
        ))}
      </div>

      <p className="text-main">&gt; {steps[stepIndex].toUpperCase()}_</p>
    </div>
  )
}
