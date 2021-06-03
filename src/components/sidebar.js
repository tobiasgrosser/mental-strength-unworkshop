import { Link } from 'gatsby'
import React from 'react'

import Logo from './pic.jpg'

const Sidebar = ({ siteMetadata }) => (
  <>
    <aside className="sidebar">
      <header>
        <div className="about">
          <div className="author-name"><a href="/">{siteMetadata.author}</a></div>
          <p>
The un-workshops are virtual workshops organized by students and researchers for students and researchers. They provide a space to practice and learn togther and allow us to explore ideas, to practice, to discuss experiences, to exchange insights, to form support groups and to create something completely new, together. 
<></> <a href="https://join.slack.com/t/vmi-ethz/signup">Join</a> the mental-strength-unworkshop channel on our slack server to get informed about and co-develop upcoming un-workshops.</p>
        </div>
      </header>
      <footer>
      </footer>
    </aside>
  </>
)

export default Sidebar
