import { RatingStars } from "../RatingStars";
import image from "../../../../assets/image/doctor.png";
import "./FeedbackTesti.css"
import { useState } from "react";

const FeedbackTesti = ({name, date, text}) => {
    const [userRating, setUserRating] = useState(0);

    const handleRatingChange = (value) => {
        setUserRating(value);
    };

    return (
        <div className="d-flex gap-0 mb-4">
            <div className="d-flex w-25 align-items-center gap-4 col-lg-3">
                <div className="bg-image">
                    <img src={image} alt="" style={{ height: "5rem", width: "5rem" }} />
                </div>
                <div className="d-flex flex-column align-items-start gap-1">
                    <p style={{fontSize:"1.3rem"}}>{name}</p>
                    <p className="date-fe">{date}</p>
                </div>
            </div>
            <div className="card w-75 border-0 shadow-sm p-3 d-flex flex-column mt-3 mt-lg-0">
                <RatingStars handleRatingChange={handleRatingChange} userRating={userRating || 0}/>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default FeedbackTesti;
