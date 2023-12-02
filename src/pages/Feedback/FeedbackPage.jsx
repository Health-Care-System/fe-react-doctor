import "./FeedbackPage.css"
import FeedbackTesti from "./component/FeedbackTesti";
import { RatingStars } from "./component/RatingStars"
import { useState } from "react";

export const FeedbackPage = () => {
  const [userRating, setUserRating] = useState(0);
  const percentages = [80, 70, 15, 10, 0];
  const ratings = [70, 20, 8, 4, 0];

  const handleRatingChange = (value) => {
    setUserRating(value);
  };

  return (
    <div className="px-4 ms-1 mt-3 w-100 feedback-container">
      {/* 1 */}
      <div className="container-rating">
        <div className="rating-wrapper mx-auto">
          <p className="text-center rating-angka">{userRating || 0}</p>
          <div className="d-flex flex-column align-items-center">
            <RatingStars handleRatingChange={handleRatingChange} userRating={userRating || 0} />
            <p className="text-center text-nowrap" style={{ fontSize: "1.25rem" }}>Rata-rata Penilaian</p>
          </div>
        </div>

        <div className="progress-wrapper w-100">
          <div className="diagram" style={{ width: '100%'}}>
            {percentages.map((percentage, index) => (
              <ProgressBar key={index} percentage={percentage} />
            ))}
          </div>

          <div 
            className="d-flex mt-1 flex-column" style={{ 
              gap: '0.9rem', 
              width: 'fit-content' 
            }}>
            {ratings.map((percentage, index) => (
              <RatingSection
                key={index}
                handleRatingChange={handleRatingChange}
                userRating={userRating}
                percentage={percentage} />
            ))}
          </div>
        </div>
      </div>

      <div>
        <h5 className="mt-3 mx-lg-2 fw-normal">Penilaian</h5>
        <div className="d-lg-flex flex-column align-items-start mx-lg-2 mt-3 gap-2">
          <FeedbackTesti name="Josua Kristin" date="12 Oktober 2020" text="Dokter ini sungguh luar biasa! Sangat ramah, sabar, dan memberikan penjelasan yang jelas tentang kondisi kesehatan saya. Terima kasih, Dokter!" />
          <FeedbackTesti name="Erika" date="22 Oktober 2020" text="Pelayanan dokter sangat memuaskan. Saya merasa didengarkan dengan baik dan mendapatkan perawatan yang tepat. Dokter yang sangat kompeten!" />
          <FeedbackTesti name="Slamet" date="24 Oktober 2020" text="Dokter sangat profesional dan komunikatif. Saya merasa tenang dan percaya diri dengan pengobatan yang diberikan. Rekomendasi tinggi!" />
        </div>
      </div>

    </div>
  )
}

const ProgressBar = ({ percentage }) => (
  <div className="progress mt-2" style={{ height: "1.75rem" }}>
    <div
      className="progress-bar"
      role="progressbar"
      aria-label="Basic example"
      style={{ width: `${percentage}%` }}
      aria-valuenow={percentage}
      aria-valuemin={0}
      aria-valuemax={100}
    />
  </div>
);

const RatingSection = ({ handleRatingChange, userRating, percentage }) => (
  <div className="d-flex align-items-center gap-2">
    <div className="d-none d-xl-flex">
    <RatingStars handleRatingChange={handleRatingChange} userRating={userRating || 0} />
    </div>
    <p className="nilai-persen">{`${percentage}%`}</p>
  </div>
);
