import { useContext, useEffect, useState } from "react"
import { Button, Card, RatingSelect } from "."
import FeedbackContext from "./context/FeedbackContext"

const FeedbackForm = () => {
    const [text, setText] = useState('')
    const [buttonDisabled, setButtonDisabled] = useState(true)
    const [message, setMessage] = useState('')
    const [rating, setRating] = useState(10)
    const {addFeedback, editFeedback, updateFeedback} = useContext(FeedbackContext)

    useEffect(() => {
      if(editFeedback.isEditable === true){
          setRating(editFeedback.item.rating)
          setText(editFeedback.item.text)
          setButtonDisabled(false)
      }

    }, [editFeedback])
    
    const handleTextChange = e => {
        const changeText = e.target.value;
        setText(changeText);

        if(changeText === ''){
            setButtonDisabled(true)
            setMessage('')
            
        } else if(changeText !== '' && text.trim().length < 9){
            setButtonDisabled(true)
            setMessage('The text must be greater than ten character')
        } else {
            setButtonDisabled(false)
            setMessage(null)
        }

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newFeedback = {
            text,
            rating
        }

        if(editFeedback.isEditable){
            updateFeedback(editFeedback.item.id, newFeedback)
        }else {
            addFeedback(newFeedback)
        }
        setButtonDisabled(true)
        setText('')
    }


  return (
      <Card>
          <form onSubmit={handleSubmit}>
            <h2>How would you rate your service with us?</h2>
            <RatingSelect select={(rating) => setRating(rating)} />
            <div className="input-group">
                <input value={text} onChange={handleTextChange} type="text" placeholder="Write a review" />
                <Button type="submit" version="primary" isDisabled={buttonDisabled} >Send</Button>
            </div>
            {message && <div className="message">✉ {message}</div>}
          </form>
      </Card>
  )
}

export default FeedbackForm