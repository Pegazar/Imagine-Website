import React from 'react'
import './FeedbackWoman.scss'
import feedback2 from "../../assets/feedback2.svg"
import woman from "../../assets/person2.webp"

const FeedbackWoman = () => {
    return (
        <div className="feedback-area-two">
            <div className="feed-left">
                <h2>Communicate and <br /> gather feedback</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Voluptatem neque nisi architecto autem molestias <br /> corrupti officia veniam.</p>
                <div className="comment-box">
                    <div className="personal">
                        <img src={woman} alt="" />
                        <div className="about-per">
                            <h3>Kimberly Gush</h3>
                            <span>Co-Founder, XYZ Inc.</span>
                        </div>
                    </div>
                    <p>“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus vitae ipsa asperiores inventore aperiam iure?”</p>
                </div>
            </div>
            <div className="feed-right">
                <div className="feedback-img">
                    <img src={feedback2} alt="" />
                </div>
            </div>
        </div>
    )
}

export default FeedbackWoman