import FeedbackMan from "./FeedbackMan"
import FeedbackWoman from "./FeedbackWoman"

const Feedback = () => {
    return (
        <div className="feedback">
            <div className="container">
                <FeedbackMan />
                <FeedbackWoman />
            </div>
        </div>
    )
}

export default Feedback