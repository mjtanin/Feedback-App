import { createContext, useEffect, useState } from "react";


const FeedbackContext = createContext()

export const FeedbackProvider = ({children}) => {
  const [feedback, setFeedback] = useState([])
  const [editFeedback, setEditFeedback] = useState({
    item: {},
    isEditable: false
  })

  useEffect(() => {
    fecthFeedback()
  
  }, [])

  const fecthFeedback = async () => {
    const response = await fetch(`/feedback?_sort=id&_order=desc`);
    const data = await response.json();
    setFeedback(data)
  }
  

  const handleDelete = async id => {
    if(window.confirm('Are you sure you want to delete feedback')){
        await fetch(`/feedback/${id}`,{method: 'DELETE'})
        setFeedback(feedback.filter(item => item.id !== id))
    }
  }
    
  const addFeedback = async newFeedback => {
      const response = await fetch('/feedback',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newFeedback)
      })
      const data = await response.json()
      setFeedback([data, ...feedback]);


  }

  const handleEdit = item => {
    setEditFeedback({
      item,
      isEditable: true
    })
  }

  const updateFeedback = async (id, updItem) => {
    const response = await fetch(`/feedback/${id}`,{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updItem)
    })
    const data = await response.json()
    setFeedback(feedback.map(item => item.id === id ? {...item, ...data} : item))
    setEditFeedback({
      item: {},
      isEditable: false
    })
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