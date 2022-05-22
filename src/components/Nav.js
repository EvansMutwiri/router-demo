import React from 'react'

import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link>
        <Link to="/post">New Post</Link>
      </nav>
  )
}

export default Nav