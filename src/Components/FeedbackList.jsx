import FeedbackItem from "./FeedbackItem"
import { useContext } from "react"
import FeedbackContext from "../Context/FeedBackContext"


function FeedbackList() {
    const { feedback } = useContext(FeedbackContext)
    if (!feedback || feedback.length === 0) {
        return <div>No Feedback Yet</div>
    }

    return <div className="feedback-list">
        {feedback.map((item) => (<FeedbackItem
            key={item.id}
            item={item}
        />))}
    </div >
}



export default FeedbackList