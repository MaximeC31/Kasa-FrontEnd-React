import React, { useState } from "react";
import { useParams } from "react-router-dom";
import HousingJSON from "../assets/data/logements.json";

function CarrouselFicheLogements() {
  let { logementId } = useParams();
  const filteredLogement = HousingJSON.find((maison) => maison.id === `${logementId}`);

  const [index, setIndex] = useState(0);
  const [descriptionVisible, setDescriptionVisible] = useState(false);
  const [equipmentsVisible, setEquipmentsVisible] = useState(false);

  const nextImage = () => {
    if (index === 4) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const previousImage = () => {
    if (index === 0) {
      setIndex(4);
    } else {
      setIndex(index - 1);
    }
  };

  const toggleDescription = () => {
    setDescriptionVisible(!descriptionVisible);
  };

  const toggleEquipments = () => {
    setEquipmentsVisible(!equipmentsVisible);
  };

  const positiveReview = filteredLogement.rating;

  const insertPositiveReview = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < positiveReview) {
        stars.push(<i key={i} className="fa-solid fa-star"></i>);
      } else {
        stars.push(<i key={i} className="fa-solid fa-star" style={{ color: 'lightgrey' }}></i>);
      }
    }
    return stars;
  };

  return (
    <article id="presentation-logement">
      <div>
        <img src={filteredLogement.pictures[index]} alt={filteredLogement.description} />
        <div>
          <i className="fa-solid fa-chevron-left" onClick={previousImage}></i>
          <i className="fa-solid fa-chevron-right" onClick={nextImage}></i>
        </div>
      </div>
      <div>
        <div id="context-logement">
          <div id="identifiants-logement">
            <h2>{filteredLogement.title}</h2>
            <p>{filteredLogement.location}</p>
            <div id="boutons-logements">
              {filteredLogement.tags.map((tag, index) => (
                <button key={index}>{tag}</button>
              ))}
            </div>
          </div>
          <div id="identification-review-logement">
            <div id="proprietaire-logement">
              <p>{filteredLogement.host.name}</p>
              <div>
                <img src={filteredLogement.host.picture} alt={filteredLogement.host.name} />
              </div>
            </div>
            <div id="review-logement">
              {insertPositiveReview()}
            </div>
          </div>
        </div>
        <div id="information-logement">
          <div className="box-information">
            <div onClick={toggleDescription}>
              <p>Description</p>
              <i className={`fa-solid fa-chevron-${descriptionVisible ? 'up' : 'down'}`}></i>
            </div>
            {descriptionVisible && <p>{filteredLogement.description}</p>}
          </div>
          <div className="box-information">
            <div onClick={toggleEquipments}>
              <p>Équipements</p>
              <i className={`fa-solid fa-chevron-${equipmentsVisible ? 'up' : 'down'}`}></i>
            </div>
            {equipmentsVisible && (
              <ul>
                {filteredLogement.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default CarrouselFicheLogements;
