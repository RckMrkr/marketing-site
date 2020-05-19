import React from 'react';
import Time from '../../../../components/time';
import TextTile from '../../../../components/textTile';
import classname from 'classname';
import Listing from '../../../../components/listing';
import { FaCheck, FaTimes, FaQuestion } from 'react-icons/fa'

const errorBlurb = 'You can still consider automating to reduce risk of errors when doing manual tasks.';
const considerYearlyBlurb = 'If you would consider evaluating after a year, it may appear to have saved you a lot of time.';

const NotFeasible = (props) => (
  <Slide {...props} icon={FaTimes} iconClass='isDanger'>
    <p>It does not seem likely that we will be able to give you the return on investment that you are hoping for in the timeline you are hoping for.</p>
    { props.evaluation !== 'yearly' && <p>{ considerYearlyBlurb }</p> }
    <p> { errorBlurb }</p>
  </Slide>
)

const NotQuite = (props) => (
  <Slide {...props} icon={FaQuestion} iconClass='isWarning'>
    <p>With the current time you are using on the task and the time it usually takes for InterOps to evaluate and implement the improvement, it would not show you the effect you are hoping for as soon as you want it.</p>
    { props.evaluation !== 'yearly' && <p>{ considerYearlyBlurb }</p> }
    <p> { errorBlurb }</p>
  </Slide>
)

const Maybe = (props) => (
  <Slide {...props} icon={FaCheck} iconClass='isSuccess'>
    <p>It would seem like you a spending a considerable amount of time on this task, so it could make sense to look into optimizing it</p>
    <p>We would like to hear more about the task so we can figure out if we are able to help you with it.</p>
  </Slide>
)

const Certainly = (props) => (
  <Slide {...props} icon={FaCheck} iconClass='isSuccess'>
    <p>It makes a lot of sense to look into how you can reduce the time it takes to perform this task. <br />If you have not considered this before you may even be able to come up with some changes yourself. If, on the other hand, you have already done all you can, it may be a good time to get some help.</p>
    <p>We are ready to help you.</p>
  </Slide>
)

const Slide = ({seconds, evaluation, icon: Icon, className, children, iconClass}) => (
  <TextTile style={{paddingLeft:'5rem'}} textClasses={classname(className)}>
    <div className="columns">
      <Listing title={<span>You would save <Time seconds={seconds} /> { evaluation }</span>} iconClass={iconClass} icon={Icon} >
        { children }
      </Listing>
    </div>
  </TextTile>
)

const ordering = [
  [Certainly, 60 * 60 * 20], // 20 hours
  [Maybe,     60 * 60 * 10], // 10 hours
  [NotQuite,  60 * 60 * 5],  // 5 hours
]

export default ({seconds, evaluation}) => {
  const [Slide] = ordering.filter(([, split]) => split < seconds)[0] || [NotFeasible];

  return <Slide style={{paddingLeft:'10px'}} seconds={seconds} evaluation={evaluation} />
}