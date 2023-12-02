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
        <div className="d-flex flex-row w-100 gap-3 mb-4">
            <div className=" d-flex flex-column flex-md-row justify-content-start align-items-center gap-3 justify-content-center justify-content-md-start">
                <div className="bg-image">
                <img src={image} alt="" className="profile-picture avatar" />
                </div>
                <div className="d-flex flex-column align-items-start gap-1">
                    <p className=" text-nowrap text-truncate" style={{fontSize:"1.3rem"}}>{name}</p>
                    <p className="date-fe text-nowrap">{date}</p>
                </div>
            </div>
            <div className="card border-0 w-100  shadow-sm p-3 d-flex flex-column rating-wrapper gap-2">
                <RatingStars handleRatingChange={handleRatingChange} userRating={userRating || 0}/>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default FeedbackTesti;
