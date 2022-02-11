import React from "react"
import classname from "classname"

const conversion = [
  [1, "seconds", "second"],
  [60, "minutes", "minute"],
  [60 * 60, "hours", "hour"],
  [24 * 60 * 60, "days", "day"],
  [7 * 24 * 60 * 60, "weeks", "week"],
  [30.42 * 24 * 60 * 60, "months", "month"],
  [365.2425 * 24 * 60 * 60, "years", "year"],
  [3652.425 * 24 * 60 * 60, "decades", "decade"],
  [36524.2199 * 24 * 60 * 60, "centuries", "century"],
  [365242.199 * 24 * 60 * 60, "millennia", "millennium"],
  [1000 * 365242.199 * 24 * 60 * 60, "epochs", "epoch"],
  [1000 * 1000 * 365242.199 * 24 * 60 * 60, "aeons", "aeon"],
]

export default ({ seconds, className }) => {
  if (seconds === 0) {
    return <span className={classname("time", className)}>nothing</span>
  }

  const [scale, unitPlural, unitSingular] = conversion
    .filter(([scale]) => {
      return seconds / scale > 1
    })
    .pop()
  const amountForScale = Math.round(seconds / scale)
  const formattedUnit = amountForScale === 1 ? unitSingular : unitPlural

  return (
    <span className={classname("time", className)}>
      {amountForScale} {formattedUnit}
    </span>
  )
}
