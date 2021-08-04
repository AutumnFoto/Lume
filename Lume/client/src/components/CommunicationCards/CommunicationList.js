import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import CommunicationCard from "./Communication";
import {
  getComCardByUserId,
  deleteCommunication,
} from "../modules/CommunicationManager";
import { getCurrentUserProfileID } from "../modules/authManager";
import { getComCardByCurrentUser } from "../modules/CommunicationManager";

const CommunicationList = () => {
  const [communication, setCommunication] = useState([]);

  const [isDeleted, setIsDeleted] = useState(false);
  const getComCard = () => {
    getComCardByCurrentUser().then((communication) =>
      setCommunication(communication)
    );
  };

  useEffect(() => {
    getComCard();
  }, [isDeleted]);

  return (
    <>
      <h3> I want..</h3>
      <Link to={`/communication/create`}>Add A New Card</Link>
      <div>
        <div>
          {communication.map((communication) => (
            <CommunicationCard
              communication={communication}
              key={communication.id}
              setIsDeleted={setIsDeleted}
              isDeleted={isDeleted}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CommunicationList;
