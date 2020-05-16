import React from "react"
import PageLayout from '../../components/pageLayout'
import useIntegrations from './hooks'
import ContactForm from "../../components/contactForm";
import Tiles from '../../components/tiles'
import TextTile from '../../components/textTile'
import ImageTile from '../../components/imageTile'
import Slider from '../../components/slider'
import Ticker from 'react-ticker'
import Logo from './component/logo'

const integrationTypes = [
  ['APIs', "APIs are similar to websites, in the sense that it is a URL that a is being called with some data. Instead of a regular person requesting it, it is just a program. The response is also optimized for being read by a computer and not by humans. It is very powerful and APIs can be used to both update and extract data. APIs are very versatile and if a system exposes them, they will most likely be used in an integration."],
  ['Webhooks', "Webhooks are similar to APIs, but different in terms of who takes the initiative. When using webhooks you essentially tell the system \"When something happens, let me know on this address\". It is crucial if you want to have any form of realtime updates. Webhooks lets you know when something has happened so you still need to use one of the other techniques to insert data into the receiving system."],
  ['Websockets','Websockets are very similar to webhooks, in the sense that it can notify you about events. Websockets, however, can also send data back to the system. It is rarely used, as the underlying technology is still relatively new and some of the benefits, like improved speed, come with some drawback too.'],
  ['File transfer', "On some system, you do not use APIs to communicate, but rather you transfer files. These systems are usually not from the era of cloud-first. You can export files and you can import files. This is great way to transfer for large amounts of data and it warrants that you process your data in bulk. It usually happens by importing the data during the night, as exports or imports can be very large and running them during the day may impact performance."],
  ['Standard protocol', "Protocols can be a mix of any of the other way to communicate, but is most often API. It is just a way to communicate that has wider acceptance. One of the more known ones in terms of integration is SCIM: A protocol that specifies a way to provision and delete users across cloud systems. By adhering to the protocol you can interact with any system that also adheres to this protocol. No special development is required."],
];

const Integrations = ({ location }) => {

  const { hero, setMoveLogos, moveLogos, logos } = useIntegrations();

  const brands = [
    {name: 'Azure Active Directory', logo: logos.azureActiveDirectory },
    {name: 'Trustpilot', logo: logos.trustpilot },
    {name: 'Facebook', logo: logos.facebook },
    {name: 'Ahsay', logo: logos.ahsay },
    {name: 'Twilio', logo: logos.twilio },
    {name: 'Vimeo', logo: logos.vimeo },
    {name: 'Unsplash', logo: logos.unsplash },
    {name: 'eloomi', logo: logos.eloomi },
    {name: 'Amazon Web Services', logo: logos.aws },
    {name: 'Microsoft Azure', logo: logos.azure },
  ];
  hero.style = {backgroundPositionY: '20%'};
  return (
    <PageLayout location={location} hero={hero} title='Integrations' subtitle='When you need to share information between systems'>
      <section className="section">
        <div className="container">
          <Tiles>
            <TextTile textClasses={['notification', 'is-primary', 'is-padded', 'is-size-4']}>
              <p className="has-text-centered subtitle is-3">If you have a lot of time to copy data between systems and always do it without error, feel free to move on. If not: Read on.</p>
            </TextTile>
            <ImageTile imageProps={{...hero, style:{ width: '100%'}}} imageBackground='#FFF' />
          </Tiles>
          <Tiles>
            <ImageTile imageProps={{...hero, style:{ width: '100%'}}} imageBackground='#FFF' />
            <TextTile textClasses={['is-flex', 'is-vertical-center', 'is-horizontal-center', 'has-text-centered']}>
              <p className='is-size-4'>If the system you usually update can expose the data in a secure and predictable way, you can start being creative with what you want to do.<br />
              If the receiving end allows inserting or updating data, you can make some very powerful integrations.</p>
            </TextTile>
          </Tiles>
        </div>
      </section>
      <section className="section is-dark">
        <div className='container'>
          <Tiles>
            <TextTile textClasses={['notification', 'is-warning', 'is-padded', 'is-flex', 'is-horizontal-center', 'is-vertical-center']}>
              <p className="subtitle has-text-centered">
                A lot of different types of integrations exist. Not all system support all types, but a lot of established system provide at least 1 method of exporting from the system and importing data into the system.
              </p>
            </TextTile>
            <TextTile textClasses={['notification', 'is-warning', 'is-flex', 'is-vertical-center']}>
              <Slider className={'slider is-flex is-vertical-center'} duration={200} infinite={false}>
                {
                  integrationTypes.map(([title, description]) => (
                    <div key={title}>
                      <h2 className="subtitle no-margin">{ title }</h2>
                      <div>{description}</div>
                    </div>
                  ))
                }
              </Slider>
            </TextTile>
          </Tiles>
        </div>
      </section>
      <section className="section" style={{paddingLeft: 0, paddingRight: '15px'}}>
        <h4 className="title has-text-centered">Some of the systems we have experience with</h4>
        <div onMouseEnter={() => setMoveLogos(false)} onMouseLeave={() => setMoveLogos(true)}>
          <Ticker speed={3} move={moveLogos} direction='toRight' offset="100%">
            {
              ({index}) => {
                const brand = brands[index % brands.length];
                return <Logo name={brand.name} logo={brand.logo} />
              }
            }
          </Ticker>
        </div>
      </section>
      <ContactForm isDark from="integrations" />
    </PageLayout>
  )
}

export default Integrations
