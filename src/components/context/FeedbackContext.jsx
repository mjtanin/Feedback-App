import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import FeedbackData from "../../data/FeedbackData";


const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
  const [feedback, setFeedback] = useState(FeedbackData)
  const [editFeedback, setEditFeedback] = useState({
    item: {},
    isEditable: false
  })

  const handleDelete = id => {
    if(window.confirm('Are you sure you want to delete feedback')){
        setFeedback(feedback.filter(item => item.id !== id))
    }
  }
    
  const addFeedback = newFeedback => {
      newFeedback.id = uuidv4()
      setFeedback([newFeedback, ...feedback]);

  }

  const handleEdit = item => {
    setEditFeedback({
      item,
      isEditable: true
    })
  }

  const updateFeedback = (id, updItem) => {
    setFeedback(feedback.map(item => item.id === id ? {...item, ...updItem} : item))
  }


  return (
    <FeedbackContext.Provider value={{
        feedback,
        editFeedback,
        handleDelete,
        addFeedback,
        handleEdit,
        updateFeedback,
    }}>
        {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext