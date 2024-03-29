import React, { useState, useEffect } from "react"
import classname from "classname"

const states = [
  ["Starting copying process", 5],
  ["Compressing files to be copied", 10],
  ["Encrypting files", 20],
  ["Establishing connection", 30],
  ["Securing connection", 40],
  ["Sending test packets", 50],
  ["Packet lost. Trying again", 40],
  ["Transfering files", 60],
  ["Transfering files", 70],
  ["Transfering files", 80],
  ["Transfering files", 90],
  ["Transfering files", 95],
  ["Transfering files", 97],
  ["File too big. Aborted!", 99],
]

export default () => {
  const [state, setState] = useState(0)
  const [dotCount, setDotCount] = useState(1)
  useEffect(() => {
    const timeout = setTimeout(() => setDotCount((dotCount % 3) + 1), 200)

    return () => clearTimeout(timeout)
  }, [dotCount])
  useEffect(() => {
    const timeout = setTimeout(
      () => setState((state + 1) % states.length),
      5000
    )

    return () => clearTimeout(timeout)
  }, [state])

  const [text, progress] = states[state]

  return (
    <div style={{ width: "100%" }} className="">
      <progress
        style={{ marginBottom: 0 }}
        className={classname(
          "progress",
          state === states.length - 1 ? "is-danger" : "is-success"
        )}
        value={progress}
        max="100"
      >
        {progress}%
      </progress>
      <span className="is-size-6 is-family-code">
        {text}
        {state !== states.length - 1 && ".".repeat(dotCount)}
      </span>
    </div>
  )
}
