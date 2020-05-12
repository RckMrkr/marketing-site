import React from 'react';
import Time from '../../../../components/time';
import TextTile from '../../../../components/textTile';
import classname from 'classname';

const errorBlurb = 'You can still consider automating to reduce risk of errors when doing manual tasks.';
const considerYearlyBlurb = 'If you would consider evaluating after a year, it may appear to have saved you a lot of time.';

const NotFeasible = (props) => (
  <Slide {...props} title='Not worth it timewise' className='is-danger'>
    <p>It does not seem likely that we will be able to give you the return on investment that you are hoping for in the timeline you are hoping for.</p>
    { props.evaluation !== 'yearly' && <p>{ considerYearlyBlurb }</p> }
    <p> { errorBlurb }</p>
  </Slide>
)

const NotQuite = (props) => (
  <Slide {...props} title='Not quite' className='is-warning'>
    <p>With the current time you are using on the task and the time it usually takes for InterOps to evaluate and implement the improvement, it would not show you the effect you are hoping for as soon as you want it.</p>
    { props.evaluation !== 'yearly' && <p>{ considerYearlyBlurb }</p> }
    <p> { errorBlurb }</p>
  </Slide>
)

const Maybe = (props) => (
  <Slide {...props} title='Most likely' className='is-success'>
    <p>It would seem like you a spending a considerable amount of time on this task, so it could make sense to look into optimizing it</p>
    <p>We would like to hear more about the task so we can figure out if we are able to help you with it.</p>
  </Slide>
)

const Certainly = (props) => (
  <Slide {...props} title='Certainly' className='is-success'>
    <p>It makes a lot of sense to look into how you can reduce the time it takes to perform this task. <br />If you have not considered this before you may even be able to come up with some changes yourself. If, on the other hand, you have already done all you can, it may be a good time to get some help.</p>
    <p>We are ready to help you.</p>
  </Slide>
)

const Slide = ({seconds, evaluation, title, className, children}) => (
  <TextTile textClasses={classname('notification', className)}>
    <h4 className="subtitle">{ title }</h4>
    <p>You are spending time equivalent to working non stop for <b><Time seconds={seconds} /></b> on this task <b>{evaluation}</b>.</p>
    { children }
  </TextTile>
)

const ordering = [
  [Certainly, 60 * 60 * 20], // 40 hours
  [Maybe,     60 * 60 * 10], // 20 hours
  [NotQuite,  60 * 60 * 5],  // 10 hours
]

export default ({seconds, evaluation}) => {
  const [Slide] = ordering.filter(([, split]) => split < seconds)[0] || [NotFeasible];

  return <Slide seconds={seconds} evaluation={evaluation} />
}