import React from 'react'
import './FeedbackMan.scss'
import feedback1 from "../../assets/feedback1.svg"
import man from "../../assets/person.webp"

const FeedbackMan = () => {
    return (
        <div className="feedback-area">
            <div className="feed-left">
                <div className="feedback-img">
                    <img src={feedback1} alt="" />
                </div>
            </div>
            <div className="feed-right">
                <h2>Communicate and <br /> gather feedback</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Voluptatem neque nisi architecto autem molestias <br /> corrupti officia veniam.</p>
                <div className="comment-box">
                    <div className="personal">
                        <img src={man} alt="" />
                        <div className="about-per">
                            <h3>Grey Simpson</h3>
                            <span>Co-Founder, XYZ Inc.</span>
                        </div>
                    </div>
                    <p>“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus vitae ipsa asperiores inventore aperiam iure?”</p>
                </div>
            </div>
        </div>
    )
}

export default FeedbackMan