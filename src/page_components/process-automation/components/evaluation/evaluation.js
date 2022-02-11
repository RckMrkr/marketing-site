import React from "react"
import Time from "../../../../components/time"
import classname from "classname"
import * as styles from "./evaluation.module.scss"
import { FaCheck, FaTimes, FaQuestion, FaBomb } from "react-icons/fa"
import EvaluationBackgroundImage from "../../../../images/process-automation/evaluation-background.inline.svg"

const errorBlurb =
  "You can still consider automating to reduce risk of errors when doing manual tasks."
const considerYearlyBlurb =
  "If you would consider evaluating after a year, it may appear to have saved you a lot of time."

const NotFeasible = props => (
  <Slide {...props} icon={FaTimes} iconClass={styles.isDanger}>
    <p>
      It does not seem likely that we will be able to give you the return on
      investment that you are hoping for in the timeline you are hoping for.
    </p>
    {props.evaluation !== "yearly" && <p>{considerYearlyBlurb}</p>}
    <p> {errorBlurb}</p>
  </Slide>
)

const NotQuite = props => (
  <Slide {...props} icon={FaQuestion} iconClass={styles.isWarning}>
    <p>
      With the current time you are using on the task and the time it usually
      takes for InterOps to evaluate and implement the improvement, it would not
      show you the effect you are hoping for as soon as you want it.
    </p>
    {props.evaluation !== "yearly" && <p>{considerYearlyBlurb}</p>}
    <p> {errorBlurb}</p>
  </Slide>
)

const Maybe = props => (
  <Slide {...props} icon={FaCheck} iconClass={styles.isSuccess}>
    <p>
      It would seem like you a spending a considerable amount of time on this
      task, so it could make sense to look into optimizing it
    </p>
    <p>
      We would like to hear more about the task so we can figure out if we are
      able to help you with it.
    </p>
  </Slide>
)

const Certainly = props => (
  <Slide {...props} icon={FaCheck} iconClass={styles.isSuccess}>
    <p>
      It makes a lot of sense to look into how you can reduce the time it takes
      to perform this task. <br />
      If you have not considered this before you may even be able to come up
      with some changes yourself. If, on the other hand, you have already done
      all you can, it may be a good time to get some help.
    </p>
    <p>We are ready to help you.</p>
  </Slide>
)

const Liar = props => (
  <Slide {...props} icon={FaBomb} iconClass={styles.isLiar}>
    <p>I think at this point you are just playing around. That's okay.</p>
    <p>See how far it can go 😀</p>
  </Slide>
)

const Slide = ({ seconds, evaluation, icon: Icon, children, iconClass }) => (
  <div className="is-relative">
    <h5 className={classname("title", "is-3", styles.title)}>
      You would save:{" "}
      <span className={styles.time}>
        <Time seconds={seconds} /> {evaluation}
      </span>
    </h5>
    <div>
      <EvaluationBackgroundImage
        className={classname(iconClass, styles.iconBackground)}
      />
      <Icon size="60%" className={classname(iconClass, "is-3", styles.icon)} />
    </div>
    {children}
  </div>
)

const ordering = [
  [Liar, 60 * 60 * 24 * 365 * 10], // 10 years
  [Certainly, 60 * 60 * 20], // 20 hours
  [Maybe, 60 * 60 * 10], // 10 hours
  [NotQuite, 60 * 60 * 5], // 5 hours
]

export default ({ seconds, evaluation }) => {
  const [Slide] = ordering.filter(([, split]) => split < seconds)[0] || [
    NotFeasible,
  ]

  return (
    <Slide
      style={{ paddingLeft: "10px" }}
      seconds={seconds}
      evaluation={evaluation}
    />
  )
}
