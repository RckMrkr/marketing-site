import { useState, useEffect } from "react"

const frequencyMapping = {
  daily: 1 / 365.2422,
  weekly: 1 / 52.177457,
  biweekly: 2 / 52.177457,
  monthly: 1 / 12,
  quarterly: 1 / 4,
  "every half year": 1 / 2,
  yearly: 1,
}

const unitMapping = {
  seconds: 1,
  minutes: 60,
  hours: 60 * 60,
  days: 60 * 60 * 24,
}

export default () => {
  const [frequencyAmount, setFrequencyAmount] = useState(2)
  const [frequencyUnit, setFrequencyUnit] = useState("daily")
  const [timeSpentAmount, setTimeSpendAmount] = useState(20)
  const [timeSpentUnit, setTimeSpendUnit] = useState("minutes")
  const [evaluation, setEvaluation] = useState("yearly")
  const [timePerEvaluation, setTimePerEvaluation] = useState(0)

  useEffect(() => {
    const timesPerYear = frequencyAmount / frequencyMapping[frequencyUnit]
    const secondsPerTime = timeSpentAmount * unitMapping[timeSpentUnit]
    const totalSecondsUsedPerYear = timesPerYear * secondsPerTime

    if (frequencyAmount !== "" && timeSpentAmount !== "") {
      setTimePerEvaluation(
        totalSecondsUsedPerYear * frequencyMapping[evaluation]
      )
    }
  }, [
    frequencyAmount,
    frequencyUnit,
    timeSpentAmount,
    timeSpentUnit,
    evaluation,
  ])

  return {
    frequencyAmount,
    setFrequencyAmount,
    frequencyUnit,
    setFrequencyUnit,
    timeSpentAmount,
    setTimeSpendAmount,
    timeSpentUnit,
    setTimeSpendUnit,
    evaluation,
    setEvaluation,
    timePerEvaluation,
  }
}
