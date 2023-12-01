import "./FeedbackPage.css"
import FeedbackTesti from "./component/FeedbackTesti";
import { RatingStars } from "./component/RatingStars"
import { useState } from "react";

export const FeedbackPage = () => {
  const [userRating, setUserRating] = useState(0);

  const handleRatingChange = (value) => {
    setUserRating(value);
  };

  return(
    <div className="p-2 w-100 feedback-container bg-transparent">
      {/* 1 */}
      <div className="d-lg-flex align-items-start justify-content-around gap-lg-4 gap-xl-2 gap-xxl-5">
        <div className="d-lg-flex flex-column justify-content-center align-items-center">
            <p className="text-center rating-angka">{userRating || 0}</p>
            <div className="d-flex flex-column align-items-center">
              <RatingStars handleRatingChange={handleRatingChange} userRating={userRating || 0}/>
              <p style={{fontSize:"1.25rem"}}>Rata-rata Penilaian</p>
            </div>
        </div>
        <div className="mt-4 mt-lg-0 diagram col-xl-7 col-lg-5">
          <div className="progress mb-2" style={{height:"1.75rem"}}>
            <div
              className="progress-bar"
              role="progressbar"
              aria-label="Basic example"
              style={{ width: "80%" }}
              aria-valuenow={80}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
          <div className="progress mt-2" style={{height:"1.75rem"}}>
            <div
              className="progress-bar"
              role="progressbar"
              aria-label="Basic example"
              style={{ width: "70%" }}
              aria-valuenow={70}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
          <div className="progress mt-2" style={{height:"1.75rem"}}>
            <div
              className="progress-bar"
              role="progressbar"
              aria-label="Basic example"
              style={{ width: "15%" }}
              aria-valuenow={15}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
          <div className="progress mt-2" style={{height:"1.75rem"}}>
            <div
              className="progress-bar"
              role="progressbar"
              aria-label="Basic example"
              style={{ width: "10%" }}
              aria-valuenow={10}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
          <div className="progress mt-2" style={{height:"1.75rem"}}>
            <div
              className="progress-bar"
              role="progressbar"
              aria-label="Basic example"
              aria-valuenow={0}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>
        </div>
        <div className="d-lg-flex flex-lg-column mt-4 mt-lg-0">
          <div className="d-flex align-items-center gap-2">
            <RatingStars handleRatingChange={handleRatingChange} userRating={userRating || 0}/>
            <p className="nilai-persen">70%</p>
          </div>
          <div className="d-flex align-items-center gap-2">
            <RatingStars handleRatingChange={handleRatingChange} userRating={userRating || 0}/>
            <p className="nilai-persen">20%</p>
          </div>
          <div className="d-flex align-items-center gap-2">
            <RatingStars handleRatingChange={handleRatingChange} userRating={userRating || 0}/>
            <p className="nilai-persen">8%</p>
          </div>
          <div className="d-flex align-items-center gap-2">
            <RatingStars handleRatingChange={handleRatingChange} userRating={userRating || 0}/>
            <p className="nilai-persen">4%</p>
          </div>
          <div className="d-flex align-items-center gap-2">
            <RatingStars handleRatingChange={handleRatingChange} userRating={userRating || 0}/>
            <p className="nilai-persen">0%</p>
          </div>
        </div>
      </div>
      {/* 2 */}
      <div className="mt-3 mx-lg-2">
        <p style={{fontSize:"1.5rem"}}>Penilaian</p>
      </div>
      {/* 3 */}


      <div className="d-lg-flex flex-column align-items-start mx-lg-2 mt-3 gap-2">
        <FeedbackTesti name="Josua Kristin" date="12 Oktober 2020" text="Dokter ini sungguh luar biasa! Sangat ramah, sabar, dan memberikan penjelasan yang jelas tentang kondisi kesehatan saya. Terima kasih, Dokter!"/>
        <FeedbackTesti name="Erika" date="22 Oktober 2020" text="Pelayanan dokter sangat memuaskan. Saya merasa didengarkan dengan baik dan mendapatkan perawatan yang tepat. Dokter yang sangat kompeten!"/>
        <FeedbackTesti name="Slamet" date="24 Oktober 2020" text="Dokter sangat profesional dan komunikatif. Saya merasa tenang dan percaya diri dengan pengobatan yang diberikan. Rekomendasi tinggi!"/>
      </div>
     
      
    </div>
  )
}