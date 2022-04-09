import PropTypes from 'prop-types'

const Input = ({type, id, name, value, onChange, checked, className}) => {
  return (
    <input id={id} type={type} name={name} value={value} onChange={onChange} checked={checked} className={className} />
  )
}

Input.defaultProps = {
    type: 'text',
}

Input.propTypes = {
    type: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.any,
    onChange: PropTypes.func.isRequired,
    checked: PropTypes.bool,
    className: PropTypes.string
}
export default Input