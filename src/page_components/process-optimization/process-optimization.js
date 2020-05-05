import React from "react"
import PageLayout from "../../components/pageLayout"
import useProcessOptimization from './hooks';

const ProcessOptimization = ({ location }) => {
  const { hero } = useProcessOptimization();

  return (
    <PageLayout location={location} hero={hero} title='Process optimization' subtitle='Let us help you optimize your processes through technology'>
      <section className="section">
        <div className="container">
        Test test test
        </div>
      </section>
    </PageLayout>
  )
}

export default ProcessOptimization
