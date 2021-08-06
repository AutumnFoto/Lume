import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import CommunicationCard from "./Communication";
import { getComCardByCurrentUser } from "../modules/CommunicationManager";
import "./Communication.css";

const CommunicationList = () => {
  const [communication, setCommunication] = useState([]);

  const [isDeleted, setIsDeleted] = useState(false);
  const getComCard = () => {
    getComCardByCurrentUser().then((communication) =>
      setCommunication(communication)
    );
  };
  const history = useHistory();

  useEffect(() => {
    getComCard();
  }, [isDeleted]);

  return (
    <>
      <section className="cardsection-content">
        <h1 className="Iwant"> I want..</h1>

        <button
          className="add-btn"
          type="button"
          onClick={() => history.push(`/communication/create`)}
        >
          {" "}
          Add A New Card
        </button>
      </section>

      <div className="container-CommmunicationCardBody">
        {communication.map((communication) => (
          <CommunicationCard
            communication={communication}
            key={communication.id}
            setIsDeleted={setIsDeleted}
            isDeleted={isDeleted}
          />
        ))}
      </div>
    </>
  );
};

export default CommunicationList;
