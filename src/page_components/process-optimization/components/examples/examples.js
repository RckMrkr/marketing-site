import React from 'react'
import './examples.scss';
import styles from './examples.module.scss';
import classname from 'classname';
import Slider from 'react-animated-slider';
import Tiles from '../../../../components/tiles';
import TextTile from "../../../../components/textTile";

const examples = [
  ["Every week you have to compile a report that you need to send to your manager so she can bring it to a leadership status meeting. The get the data you need to, not only, access multiple systems, but you also want to make it look nice and coherent so she makes a good impression.", "A small program is created that you can either choose to run manually or that will run at a specified hour. The program will fetch all the required data, do the calculations, set it up nicely and send it to either you, your boss or both of you."],
  ["Every month your finance department manually goes through a list of payments and identifies who are missing. Once identified they send an email regarding the missing payment and what consequences it will have for them as a customer.", "A small program is created to fetch a list of customers that should have paid and the ones that did pay. The ones that did not pay will be added to a list and displayed to the finance worker running the program. The finance worker now selects who of the customers should get an email, in case there are circumstances the system is not aware of."],
  ["You are monitoring your companys many backup systems and have a way to verify that no errors have occured. All you have to do is check that nothing is red on the screen. It is easy, but it is also easy to forget whn you have other things to do.", "A small piece of code could be running on a server, checking statuses at 1 minute intervals, notifying you the moment something has turned red. The notification would then give you information about which backup failed and when, so you can start troubleshooting immediately."],
  ["When people join the company, it is your job to make sure they get a user in all your systems with an appropriate email address and that the manager gets the initial login credentials.", "A small program is created that asks for the relevant info (name, email, department, title) and creates the user in all the systems she needs access to. Perhaps even sets permission levels correctly based on titles or department. At the end the manager is notified so she can ensure a quick onboarding."],
]

export default () => {

  return (
    <>
    <section className="section">
      <div className="container">
        <div className="columns is-horizontal-center">
            <div className="column is-half ">
              <p className="is-size-4 has-text-centered has-text-dark">
                Some tasks can be fully automated, while others require a bit of input in order to have the process flexible enough for your needs
              </p>
            </div>
          </div>
      </div>
    </section>
      <section className="section is-dark">
        <div className={classname('container', styles.explanation)}>
          <Tiles>
            <TextTile textClasses={['notification', 'is-success', 'is-padded', 'is-flex', 'is-horizontal-center', 'is-vertical-center']}>
              <p className="subtitle has-text-centered">
                There are a lot of tasks that are ideal for some kind of optimization.<br />You can see some examples in the slider. <br/>
              </p>
            </TextTile>
            <TextTile textClasses={['notification', 'is-success', 'is-flex', 'is-vertical-center']}>
              <Slider duration={200} infinite={false}>
                {
                  examples.flat().map((text, index) => {
                      const title = index % 2 === 0 ? 'Problem' : 'Solution'
                      return (
                        <div className='slide' key={`${index}-problem`}>
                          <h2 className="subtitle no-margin">{ title } {Math.floor(index/2) + 1}</h2>
                          <div>{text}</div>
                        </div>
                      )
                    })
                }
              </Slider>
            </TextTile>
          </Tiles>
        </div>
      </section>
    </>
  )
}

// export default () => {
//   return (
//     <section className="section">
//       <div className={classname('container', styles.explanation)}>
//         <h4 className="title">Tell me more about optimization through technology</h4>
//         <p>There are a lot of tasks that are ideal for some kind of optimization. A few examples could be:
//         </p>
//           <ul>
//             <li>Pulling the same report every week.</li>
//             <li>Sending reminders to all customers who didn't pay.</li>
//             <li>Check status on something periodically to make an action when it changes status.</li>
//             <li>Create and delete users in 3 different systems.</li>
//           </ul>
//           <p>
//           Some of the tasks can be fully automated, so you reduce your time spent on them to 0. Others may require a bit of input in order to have the process flexible enough that you can use it for what you want.<br />
//             That is also why we call it optimization and not automation. The outcome is not neccesarily a fully automated solution you will end up with.
//             This is always a tradeoff to bear in mind when designing a potential process solution. For example the following could be potential solutions to the above list
//           </p>
//           <ul>
//             <li>Have a little program running on a server, that connects to all the data sources, does the transformations and emails all interested parties</li>
//             <li>Either create a small browser plugin (if the program is browser based) and just click a button. Alternatively feed a list of emails into a small program on your computer or a server.</li>
//             <li>Have a system that checks the status for you and either notify you of the change or does the required action for you altogether.</li>
//             <li>A small program is created that asks for the relevant info (name, email, department, title) and creates the user in all the systems he's required to. Perhaps even sets permission levels correctly based on titles or department.</li>
//           </ul>
//         </div>
//       </section>
//   )
// }