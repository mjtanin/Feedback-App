import PropTypes from 'prop-types'
import React from 'react'

function Header({ text }) {
  return (
    <header>
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