import { Link } from 'gatsby'
import React from 'react'

import Logo from './pic.jpg'

const Sidebar = ({ siteMetadata }) => (
  <>
    <aside className="sidebar">
      <header>
        <div className="about">
          <div className="author-name">{siteMetadata.author}</div>
          <p>
The un-workshops are organized for members by members. They provide a space for any topic relevant to the scientific excellence and well-being initiative. They are an opportunity to explore ideas, to practice, to discuss experiences, to exchange insights, to form support groups and to create something completely new, together.
Join the mental-strength-unworkshop channel on our slack server to get informed about upcoming un-workshops.</p>
        </div>
      </header>
      <footer>
      </footer>
    </aside>
  </>
)

export default Sidebar
