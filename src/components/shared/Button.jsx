import PropTypes from 'prop-types'

const Button = ({children, version, type, isDisabled}) => {

  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`} >{children}</button>
  )
}

Button.defaultProps = {
    children: 'Submit',
    version: 'primary'
}

Button.propTypes = {
    children: PropTypes.node,
    version: PropTypes.string,
    type: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool.isRequired
}

export default Button