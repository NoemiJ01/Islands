import React from "react";
import "../App.css";
import WikiButton from "./WikiButton.js";

function CardInfo(props) {
  return (
    <div className="card-container">
      <div className="card-title">Lonely Island</div>
      <p className="card-text description">
        Uyedineniya Island is an island located in the central part of the Kara
        Sea, roughly midway between Novaya Zemlya and Severnaya Zemlya. Its
        latitude is 77° 29' N and its longitude 82° 30' E. It is often labelled
        as Einsamkeit Island as well as Lonely Island or Solitude Island in
        English maps.
      </p>
      <p className="card-text lat-lon">82.400208, 77.490146</p>
      <WikiButton />
    </div>
  );
}

export default CardInfo;
