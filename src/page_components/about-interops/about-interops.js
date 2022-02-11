import React from "react"
import Layout from "../../components/layout"
import useAboutInterOps from "./hooks"
import * as styles from "./about-interops.module.scss"
import classname from "classname"
import Img from "gatsby-image"
import useProcessAutomation from "./../process-automation/hooks"

const AboutInterops = ({ location }) => {
  const { robot } = useProcessAutomation()
  const { hero, middleImage, topImage } = useAboutInterOps()

  hero.style = { backgroundPositionY: "20%" }
  return (
    <Layout
      location={location}
      hero={hero}
      title="InterOps"
      subtitle="What is this company?"
    >
      <section className={classname("section is-small", styles.section)}>
        <div className="container">
          <div className={classname("columns", styles.columns)}>
            <div className={classname("column", styles.column, styles.left)}>
              <h3 className="title is-3">How do we win?</h3>
              <p>
                There is a lot of companies out there doing great work.
                Delivering amazing services to both people and other customers.
                We want to help them do that. We want to make sure that the
                employees of those companies do their job in the most productive
                and fulfilling way. We want to make it possible for people to do
                the things, that can not be done by a computer. We want to
                ensure that people have the time they need to come up with
                ideas, get inspired and think big. If we can do that, we have
                won.
              </p>
            </div>
            <div className={classname("column", styles.column)}>
              <Img {...topImage} />
            </div>
          </div>
          <div className={classname("columns", styles.columns)}>
            <div className={classname("column", styles.column, "is-relative")}>
              <Img {...middleImage} className="clickable" />
            </div>
            <div className={classname("column", styles.column, styles.right)}>
              <h3 className="title is-3">Nerd at heart</h3>
              <p>
                Technology is our passion. We believe that people today have a
                unique opportunity to use technology to their advantage to a
                larger degree than they already do. Most of the things that are
                being done today leverage technology in one way or another. We
                believe that by pairing our understanding of technology and our
                customers specialized business understanding we can make magic
                happen.
              </p>
            </div>
          </div>
          <div className={classname("columns", styles.columns)}>
            <div className={classname("column", styles.column, styles.left)}>
              <h3 className="title is-3">Small but powerful</h3>
              <p>
                There are a lot of things that can be done to help companies. We
                focus on the smaller projects. Typically less than 1 month. We
                believe that by primarily engaging in smaller projects, we can
                remove a lot of the overhead that bigger projects entail. We do
                not want an internal project manager. We want to be out there
                with our client, experiencing the issues they have and come up
                with a solution together. We believe that by being familar with
                the issues we try to solve yields better results. That benefits
                our clients and ourselves.
              </p>
            </div>
            <div className={classname("column", styles.column)}>
              <Img {...robot} />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default AboutInterops
