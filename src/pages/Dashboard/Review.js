import React from "react";
import { useState } from "react/cjs/react.development";
import review from "../../images/review.png";
import { FaStar } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

const Review = () => {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [message, setMessage] = useState("");

  const { user } = useAuth();
  const handleOnBlur = (e) => {
    setMessage(e.target.value);
  };
  const userName = user.displayName;
  const userImg = user.photoURL;
  const handlereviewSubmit = (e) => {
    const reviewdata = { message, rating, userName, userImg };
    console.log(reviewdata);
    axios
      .post("https://thawing-brook-28581.herokuapp.com/reviews", reviewdata)
      .then((res) => {
        if (res.data.insertedId) {
          alert("Your Reviews Add Sucessfully");
          setMessage("");
          setRating(null);
        }
      });
    e.preventDefault();
  };
  return (
    <div>
      <h2 className="text-3xl font-bold text-center py-4">
        Give Us Your <span style={{ color: "#8FBE32" }}>Review</span>
      </h2>
      <div className="w-24 h-1.5 rounded mx-auto bg-yellow-400"></div>
      <div className="flex-col-reverse flex lg:flex-row items-center">
        <div className="w-full">
          <form
            onSubmit={handlereviewSubmit}
            className="flex flex-col w-full  lg:w-96  bg-white rounded shadow-lg p-12 mt-12"
          >
            <label className="font-semibold text-xs" htmlFor="usernameField">
              Your Message
            </label>
            <textarea
              className="flex items-center py-2 px-4  bg-gray-200 mt-2 rounded focus:outline-none focus:ring-2"
              type="text"
              rows="5"
              onBlur={handleOnBlur}
            />
            <div>
              {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                  <label key={star}>
                    <input
                      type="radio"
                      name="rating"
                      value={ratingValue}
                      onClick={() => setRating(ratingValue)}
                    />
                    <FaStar
                      color={
                        ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"
                      }
                      size={20}
                      style={{
                        display: "inline",
                        cursor: "pointer",
                        transition: "color 200ms",
                      }}
                      onMouseEnter={() => setHover(ratingValue)}
                      onMouseLeave={() => setHover(null)}
                    />
                  </label>
                );
              })}
            </div>
            <button
              type="submit"
              className="flex items-center justify-center h-12 px-6  bg-blue-600 mt-8 rounded font-semibold text-sm text-blue-100 hover:bg-blue-700"
            >
              Submit Review
            </button>
          </form>
        </div>
        <div className="w-full">
          <img src={review} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Review;
