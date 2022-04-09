import { useState } from "react"

const RatingSelect = ({select}) => {
  const [selected , setSelected] = useState(10)
  const handleChange = (e) => {
    setSelected(+e.currentTarget.value)
    select(+e.currentTarget.value)
  }
  return (
    <ul className="rating">
      {Array(10).fill(1).map((element, index) => (
        <li key={index}>
            <input type="radio" name="rating" value={index + element} id={`num_${index + element}`} onChange={handleChange} checked={selected === (index + element)} />
            <label htmlFor={`num_${index + element}`}>{`${index + element}`}</label>
        </li>

      ))}
    </ul>
  )
}

export default RatingSelect