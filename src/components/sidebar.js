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

	<p>
	The UnWorkshop series is co-organized between ETH Zurich and the University of Edinburgh.
	</p>

	<br />
	<br />
	<h3>Event Calendar</h3>
	<iframe src="https://calendar.google.com/calendar/embed?height=500&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Europe%2FLondon&amp;src=MWRkdTZpcG1qaGtybXVzbHVjdGFrc2pjZXNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23B39DDB&amp;showCalendars=0&amp;showNav=0&amp;showPrint=0&amp;showDate=0&amp;showTitle=0&amp;showTz=1&amp;showTabs=0&amp;mode=AGENDA" width="100%" height="500" frameborder="0" scrolling="no"></iframe>
        </div>
      </header>
      <footer>
      </footer>
    </aside>
  </>
)

export default Sidebar
