import { useState } from "react";
import "./RatingStars.css"

export const RatingStars = ({ handleRatingChange, scale }) => {
    const [rating, setRating] = useState(0);
    
    const onRatingChange = (value) => {
      setRating(value);
      handleRatingChange(value);
    };

    // eslint-disable-next-line no-unused-vars
    const convertToPercentage = (value) => {
      if (scale === '0-100') {
        return (value / 5) * 100;
      }
      return value * 20;
    };

    // eslint-disable-next-line no-unused-vars
    const convertFromPercentage = (value) => {
      if (scale === '0-100') {
        return (value / 100) * 5;
      }
      return value / 20;
    };

    return (
      <div>
        <fieldset className="rating">
            {/* Rating 5 */}
            <input
              type="radio"
              id="star5"
              name="rating"
              value={5}
              checked={rating === 5}
              onChange={() => onRatingChange(5)}
            />
            <label htmlFor="star5" title="Awesome - 5 stars" />

            {/* Rating 4.5 */}
            <input
              type="radio"
              id="star4half"
              name="rating"
              value={4.5}
              checked={rating === 4.5}
              onChange={() => onRatingChange(4.5)}
            />
            <label htmlFor="star4half" className="half" title="Pretty good - 4.5 stars" />

            {/* Rating 4 */}
            <input
              type="radio"
              id="star4"
              name="rating"
              value={4}
              checked={rating === 4}
              onChange={() => onRatingChange(4)}
            />
            <label htmlFor="star4" title="Pretty good - 4 stars" />

            {/* Rating 3.5 */}
            <input
              type="radio"
              id="star3half"
              name="rating"
              value={3.5}
              checked={rating === 3.5}
              onChange={() => onRatingChange(3.5)}
            />
            <label htmlFor="star3half" className="half" title="Meh - 3.5 stars" />

            {/* Rating 3 */}
            <input
              type="radio"
              id="star3"
              name="rating"
              value={3}
              checked={rating === 3}
              onChange={() => onRatingChange(3)}
            />
            <label htmlFor="star3" title="Meh - 3 stars" />

            {/* Rating 2.5 */}
            <input
              type="radio"
              id="star2half"
              name="rating"
              value={2.5}
              checked={rating === 2.5}
              onChange={() => onRatingChange(2.5)}
            />
            <label htmlFor="star2half" className="half" title="Kinda bad - 2.5 stars" />

            {/* Rating 2 */}
            <input
              type="radio"
              id="star2"
              name="rating"
              value={2}
              checked={rating === 2}
              onChange={() => onRatingChange(2)}
            />
            <label htmlFor="star2" title="Kinda bad - 2 stars" />

            {/* Rating 1.5 */}
            <input
              type="radio"
              id="star1half"
              name="rating"
              value={1.5}
              checked={rating === 1.5}
              onChange={() => onRatingChange(1.5)}
            />
            <label htmlFor="star1half" className="half" title="Meh - 1.5 stars" />

            {/* Rating 1 */}
            <input
              type="radio"
              id="star1"
              name="rating"
              value={1}
              checked={rating === 1}
              onChange={() => onRatingChange(1)}
            />
            <label htmlFor="star1" title="Sucks big time - 1 star" />

            {/* Rating 0.5 */}
            <input
              type="radio"
              id="starhalf"
              name="rating"
              value={0.5}
              checked={rating === 0.5}
              onChange={() => onRatingChange(0.5)}
            />
            <label htmlFor="starhalf" className="half" title="Sucks big time - 0.5 stars" />
        </fieldset>
      </div>
    );
  };
  