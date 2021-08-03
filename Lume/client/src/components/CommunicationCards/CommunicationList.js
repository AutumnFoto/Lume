import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CommunicationCard from "./Communication";
import { getByUser } from "../modules/CommunicationManager";

const CommunicationList = () => {
  const [communication, setCommunication] = useState([]);
 
  const getComCard = () => {
    getByUser().then((communication) => setCommunication(communication));
  };

  useEffect(() => {
    getComCard();
  }, []);

  return (
    <>
      <Link to="/communication/create"> Create Card </Link>
      <div>
        <div>
          {communication.map((communication) => (
            <CommunicationCard
              communication={communication}
              key={communication.id}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CommunicationList;
