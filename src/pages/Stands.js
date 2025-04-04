import React from "react";
import { FaMapMarkerAlt, FaInstagram } from "react-icons/fa";
import standsData from "../data/stands.json";

import "../assets/styles/stands.css";

const Stands = () => {
    return (
        <div className="page-container">
            <div className="section-container">
                <h1 className="title">STANDS</h1>
                <div className="grid">
                    {standsData.Stands.filter(stand => stand.estado === "Aprobado").map((stand, index) => (
                        <div className="card" key={index}>
                            <img src={stand.imagen} alt={stand.nombre} className="image" />
                            <h2 className="stand-name">{stand.nombre}</h2>
                            <p className="stand-location">
                                <FaMapMarkerAlt className="icon" /> {stand.ubicacion}
                            </p>
                            <a href={stand.redes} target="_blank" rel="noopener noreferrer" className="stand-link">
                                <FaInstagram className="icon" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Stands;
