import Card from "./shared/Card"
import { useState, useContext } from "react"
import Button from "./shared/Button"
import RatingSelect from "./RatingSelect"
import FeedbackContext from "../Context/FeedBackContext"

function FeedbackForm() {
    const [text, setText] = useState("")
    const [rating, setRating] = useState(10)
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [message, setMessage] = useState("")
    const { addFeedback } = useContext(FeedbackContext)


    const handleTextChange = (e) => {
        if (text === "") {
            setBtnDisabled(true)
            setMessage(null)
        } else if (text !== "" && text.length <= 10) {
            setBtnDisabled(true)
            setMessage("Please enter at least 10 characters")

        } else {
            setBtnDisabled(false)
            setMessage(null)

        }
        setText(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (text.trim().length > 10) {
            const newFeedback = {
                text,
                rating,
            }
            addFeedback(newFeedback)
            setText("")

        }
    }

    return (
        <Card>
            <form onSubmit={handleSubmit}>
                <h2>How Would You Rate Our Service?</h2>
                <RatingSelect select={(rating) => setRating(rating)} />
                <div className="input-group">
                    <input onChange={handleTextChange} type="text"
                        placeholder="write a review"
                        value={text} />
                    <Button type="submit" isDisabled={btnDisabled}>Send</Button>
                </div>
                {message && <div className="message">{message}</div>}
            </form>
        </Card>
    )
}
export default FeedbackForm 