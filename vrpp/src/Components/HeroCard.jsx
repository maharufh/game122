import React from "react";

function HeroCard({ selectCard }) {
  if (!selectCard || !selectCard.name) {
    return <h4 className="text-center">Select a hero to see details</h4>;
  }

  let { name, place, imgUrl } = selectCard;

  return (
    <>
      <div className="card">
        <div className="card-head">
          <img
            className="card-img-top"
            src={imgUrl}
            alt={name}
            height={200}
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="card-body text-center">
          <h2>{name}</h2>
          <h4>{place}</h4>
        </div>
      </div>
    </>
  );
}

export default HeroCard;
