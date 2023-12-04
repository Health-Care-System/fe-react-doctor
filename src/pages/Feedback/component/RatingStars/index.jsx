import starColored from '../../../../assets/icon/star.svg';
import starFill from '../../../../assets/icon/star-fill.svg';
import "./RatingStars.css";

export const RatingStars = ({ handleRatingChange, userRating, ...props }) => {
  return (
    <div {...props} className="rating">
      {[1, 2, 3, 4, 5].map((index) => (
        <div key={index} className="star" onClick={() => handleRatingChange(index)}>
          {index <= userRating ? (
            <img src={starFill} alt={`star-fill-${index}`} />
          ) : (
            <img src={starColored} alt={`star-${index}`} />
          )}
        </div>
      ))}
    </div>
  );
};
