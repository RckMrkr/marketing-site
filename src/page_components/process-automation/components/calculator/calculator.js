import React from "react"
import Evaluation from "../evaluation"
import useCalculator from "./hooks"
import classname from "classname"
import * as styles from "./calculator.module.scss"

export default () => {
  const {
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
  } = useCalculator()

  const setProperty = setter => event => setter(event.target.value)
  return (
    <section
      id="calculator"
      className={classname("section has-background-white", styles.section)}
    >
      <div className="container">
        <h3 className="title has-text-centered is-3">Should I consider it?</h3>
        <p className="has-text-centered">
          Are you still considering if it would make sense, to invest in
          process/automation optimization?
          <br />
          Use our calculator below, and get a quick estimate on the return on
          investment.
        </p>
        <div className={classname("columns is-desktop", styles.boxes)}>
          <div className={classname("column", styles.box)}>
            <div style={{ padding: "30px" }}>
              <label className="label" htmlFor="contactFormEmail">
                How often do you do it?
              </label>
              <div className="columns">
                <div className="column">
                  <div className="field">
                    <div className="control">
                      <input
                        className={classname("input", styles.halfInput)}
                        onChange={setProperty(setFrequencyAmount)}
                        min={1}
                        value={frequencyAmount}
                        name="length"
                        id="processOptimizationLength"
                        type="number"
                      />
                      <span className={styles.times}>times</span>
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="field">
                    <div className="control">
                      <div className={classname("select", styles.fullInput)}>
                        <select
                          className={styles.fullInput}
                          onChange={setProperty(setFrequencyUnit)}
                          value={frequencyUnit}
                        >
                          <option value="daily">per day</option>
                          <option value="weekly">per week</option>
                          <option value="monthly">per month</option>
                          <option value="quarterly">per quarter</option>
                          <option value="every half year">per half year</option>
                          <option value="yearly">per year</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <label className="label" htmlFor="contactFormEmail">
                How long does it usually take?
              </label>
              <div className="columns">
                <div className="column">
                  <div className="field">
                    <div className="control">
                      <input
                        className={styles.fullInput}
                        onChange={setProperty(setTimeSpendAmount)}
                        min={1}
                        value={timeSpentAmount}
                        className="input"
                        type="number"
                      />
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="field">
                    <div className="control">
                      <div className={classname("select", styles.fullInput)}>
                        <select
                          className={styles.fullInput}
                          onChange={setProperty(setTimeSpendUnit)}
                          value={timeSpentUnit}
                        >
                          <option value="minutes">Minutes</option>
                          <option value="hours">Hours</option>
                          <option value="days">Days</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="field">
                <label className="label" htmlFor="processOptimizationLength">
                  When do you evaluate success?
                </label>
                <div className="control">
                  <div className={classname("select", styles.fullInput)}>
                    <select
                      className={styles.fullInput}
                      onChange={setProperty(setEvaluation)}
                      value={evaluation}
                    >
                      <option value="yearly">After one year</option>
                      <option value="every half year">After half a year</option>
                      <option value="quarterly">After a quarter</option>
                      <option value="monthly">After a month</option>
                      <option value="biweekly">After two weeks</option>
                      <option value="weekly">After a week</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={classname("column", styles.box)}>
            <div style={{ padding: "30px" }}>
              <Evaluation seconds={timePerEvaluation} evaluation={evaluation} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
