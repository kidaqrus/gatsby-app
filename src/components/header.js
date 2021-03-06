import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import ThemeContext from "../components/context/ThemeContext"

const Header = ({ siteTitle }) => (
  <ThemeContext.Consumer>
    {theme => (
      <div
        style={{
          background: `green`,
          marginBottom: `1.45rem`,
        }}
      >
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 860,
            padding: `1.45rem 1.0875rem`,
          }}
        >
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
            >
              {siteTitle}
            </Link>
          </h1>
          <button className="dark-switcher" onClick={theme.toggleDark}>
            {theme.dark ? <span>Light mode ☀</span> : <span>Dark mode ☾</span>}
          </button>
        </div>
      </div>
    )}
  </ThemeContext.Consumer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header