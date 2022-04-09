import PropTypes from 'prop-types'
import React from 'react'

function Header({ text }) {
  const headerStyle = {
      backgroundColor: 'rgba(0, 0, 0, 0.4)',
      color: 'rgba(255, 101, 87, 0.7)',
  }

  return (
    <header style={headerStyle}>
        <div className="container">
            <div className="brand">
                <h2>{text}</h2>
            </div>
        </div>
    </header>
  )
}

Header.defaultProps = {
    text: 'Feedback app',
}

Header.propTypes = {
    text: PropTypes.string.isRequired,
}
export default Header