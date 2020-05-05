import React from "react"
import PageLayout from '../../components/pageLayout'
import useIntegrations from './hooks'

const Integrations = ({ location }) => {

  const { hero } = useIntegrations();

  return (
    <PageLayout location={location} hero={hero} title='Integrations' subtitle='When you need to share information between systems'>
      <section className="section">
        <div className="container">
        Test test test
        </div>
      </section>
    </PageLayout>
  )
}

export default Integrations
