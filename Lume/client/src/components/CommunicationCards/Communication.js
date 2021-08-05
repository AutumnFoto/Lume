import React from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

import {
  deleteCommunication,
  getComCardByCurrentUser,
} from "../modules/CommunicationManager";
import "./CommunicationCard.css";

//  bang changes false to true on the deleted use state
const CommunicationCard = ({ communication, isDeleted, setIsDeleted }) => {
  const handleDelete = (id) => {
    if (window.confirm("Do you want to delete this card?")) {
      deleteCommunication(id).then(() => {
        setIsDeleted(!isDeleted);
        getComCardByCurrentUser();
      });
    }
  };

  // const handleImage = (event) => {
  //   var IwantCards = document.getElementById(".iwant");
  //   IwantCards.src = event.target.src;
  // };

  const history = useHistory();

  return (
    <div className="CommunicationCard">
      <div className="CommmunicationCardBody">
        <h3> {communication.content}</h3>

        <img src={communication.image} alt="communication" />
        {/* <img
          src={communication.image}
          alt="communication"
          onClick={() => handleImage()}
        /> */}
        <button
          className="editbutton"
          type="button"
          onClick={() =>
            history.push(`/communication/edit/${communication.id}`)
          }
        >
          Edit
          <FontAwesomeIcon icon={faEdit} size="1x" className="edit" />
        </button>

        <button
          className="deletebutton"
          onClick={() => handleDelete(communication.id)}
        >
          Delete <FontAwesomeIcon icon={faEdit} size="1x" className="edit" />
        </button>
      </div>
    </div>
  );
};

export default CommunicationCard;
