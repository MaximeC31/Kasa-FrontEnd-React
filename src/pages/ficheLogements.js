import React from "react";
import { useParams } from "react-router-dom";
import "./ficheLogements.css";

function FicheLogements() {
    let {logementId} = useParams();
    return (
        <h1>Page fiche logements: {logementId}</h1>
    )
};

export default FicheLogements;