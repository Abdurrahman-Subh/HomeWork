import React from "react";
import ReactStars from "react-rating-stars-component";

const AddComment = ({
  onClickFunc,
  inputChange,
  value,
  ratingChanged,
  starRating,
}) => {
  return (
    <div>
      <textarea
        type="text"
        name="comment"
        id="comment"
        onChange={inputChange}
        value={value}
      />
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ReactStars
          count={5}
          onChange={ratingChanged}
          value={Number(starRating || 0)}
          size={24}
          activeColor="#ffd700"
        />
      </div>
      <button type="submit" onClick={onClickFunc}>
        Yorum Yap
      </button>
    </div>
  );
};

export default AddComment;
