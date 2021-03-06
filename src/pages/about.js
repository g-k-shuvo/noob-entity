import React from "react"
import Layout from "../components/Layout"
import {
  aboutStyles,
  aboutLinks,
  description,
} from "../styles/about.module.css"

const about = () => {
  return (
    <Layout>
      <div className={aboutStyles}>
        <h3>Hi There!</h3>
        <h2>I'm Golam Kibria ð</h2>
        <p>Web Developer and Freelancer based in Sylhet, Bangladesh ð©</p>
        <p className={description}>
          Check out all my projects on ð
          <a
            className={aboutLinks}
            target="_blank"
            href="https://www.github.com/g-k-shuvo"
            rel="noreferrer"
          >
            Github
          </a>
          <br />
          Visit my ð
          <a
            className={aboutLinks}
            target="_blank"
            href="https://g-k-shuvo.github.io/"
            rel="noreferrer"
          >
            Personal Website
          </a>
          <br />
          Looking for new opportunities! my inbox is always open. Whether you
          have a question or just want to say hi, <br /> Iâll try my best to get
          back to you!ð§
          <a className={aboutLinks} href="mailto:gkshuvo24@gmail.com">
            Say Hello!
          </a>
        </p>
      </div>
    </Layout>
  )
}

export default about
