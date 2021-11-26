import React from "react";
import ReactStars from "react-rating-stars-component";

const Comment = ({ comments }) => {
  return (
    <div>
      {comments.length === 0 ? (
        <p>Henüz hiç yorum yok</p>
      ) : (
        comments?.map((item, index) => (
          <div key={index}>
            <p>{item?.comment}</p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <ReactStars
                count={5}
                value={Number(item?.starRating || 0)}
                size={24}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
              />
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Comment;
