import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CommunicationCard from "./Communication";
import {
  getByUser,
  deleteCommunication,
} from "../modules/CommunicationManager";

const CommunicationList = () => {
  const [communication, setCommunication] = useState([]);
  const { userProfileId } = useParams();

  const getComCard = () => {
    console.log(communication);
    getByUser().then((communication) => setCommunication(communication));
  };

  const handleDelete = (id) => {
    deleteCommunication(id).then(() => getByUser());
  };

  useEffect(() => {
    getComCard();
  }, []);

  return (
    <>
      <Link to={`/communication/create/${userProfileId}`}>Add A New Card</Link>
      <div>
        <div>
          {communication.map((communication) => (
            <CommunicationCard
              communication={communication}
              key={communication.id}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CommunicationList;
