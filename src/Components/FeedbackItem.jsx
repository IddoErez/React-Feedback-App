import Card from "./shared/Card"
import { PropTypes } from "prop-types"
import { FaTimes, FaEdit } from "react-icons/fa"
import {useContext} from "react"
import FeedbackContext from "../Context/FeedBackContext"

function Feedbackitem({ item }) {
    const {deleteFeedback ,editFeedback} = useContext(FeedbackContext)
    return (
        <Card>
            <div className="num-display">{item.rating}</div>
            <button onClick={() => deleteFeedback(item.id)} className="close"><FaTimes color="pruple" /></button>
            <button onClick={() => editFeedback(item)}   className="edit">
                <FaEdit color="pruple"/>
            </button>
            <div className="text-display">{item.text}</div>
        </Card>
    )
}

Feedbackitem.propTypes = {
    item: PropTypes.object.isRequired
}
export default Feedbackitem