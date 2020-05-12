import React from 'react'
import Evaluation from '../evaluation'
import useCalculator from './hooks';
import Tiles from '../../../../components/tiles'
import TextTile from '../../../../components/textTile'

export default () => {

  const {
    frequencyAmount, setFrequencyAmount,
    frequencyUnit, setFrequencyUnit,
    timeSpentAmount, setTimeSpendAmount,
    timeSpentUnit, setTimeSpendUnit,
    evaluation, setEvaluation,
    timePerEvaluation,
  } = useCalculator();

  const setProperty = setter => event => setter(event.target.value);
  return (
    <section className="section">
      <div className="container">
        <h3 className="title has-text-centered is-3">Should I consider it?</h3>
        <Tiles>
          <TextTile>
            <label className="label" htmlFor='contactFormEmail'>How often do you do it?</label>
            <div className="columns">
              <div className="column is-5">
                  <div className="field">
                  <div className="control">
                    <input onChange={setProperty(setFrequencyAmount)} min={1} value={frequencyAmount} name="length" id="processOptimizationLength" className="input" type="number" />
                  </div>
                </div>
              </div>
              <div className="column is-vertical-center is-horizontal-center has-text-centered is-flex">
                <p className="is-size-4">times</p>
              </div>
              <div className="column is-5">
                <div className="field">
                  <div className="control">
                    <div className="select is-full">
                      <select onChange={setProperty(setFrequencyUnit)} value={frequencyUnit}>
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
            <label className="label" htmlFor='contactFormEmail'>How long does it usually take?</label>
            <div className="columns">
              <div className="column">
                  <div className="field">
                  <div className="control">
                    <input onChange={setProperty(setTimeSpendAmount)} min={1} value={timeSpentAmount} className="input" type="number" />
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="field">
                  <div className="control">
                    <div className="select is-full">
                      <select onChange={setProperty(setTimeSpendUnit)} value={timeSpentUnit}>
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
              <label className="label" htmlFor='processOptimizationLength'>When do you evaluate success?</label>
              <div className="control">
                <div className="select">
                  <select onChange={setProperty(setEvaluation)} value={evaluation}>
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
          </TextTile>
          <Evaluation seconds={timePerEvaluation} evaluation={evaluation} />
        </Tiles>
      </div>
    </section>
  )
}