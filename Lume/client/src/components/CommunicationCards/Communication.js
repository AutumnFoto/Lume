import React from "react";
import { useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import Draggable from "react-draggable";

import {
  deleteCommunication,
  getComCardByCurrentUser,
} from "../modules/CommunicationManager";
import "./Communication.css";

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

  const history = useHistory();

  return (
    <Draggable>
      <div className="CommmunicationCardBody">
        <h3 className="content"> {communication.content}</h3>

        <img
          className="comimage"
          src={communication.image}
          alt="communication"
        />
        <button
          className="edit-btn"
          type="button"
          onClick={() =>
            history.push(`/communication/edit/${communication.id}`)
          }
        >
          Edit
          <FontAwesomeIcon icon={faEdit} size="1x" className="edit" />
        </button>

        <button
          className="delete-btn"
          onClick={() => handleDelete(communication.id)}
        >
          Delete
          <FontAwesomeIcon icon={faTrash} size="1x" className="delete" />
        </button>
      </div>
    </Draggable>
  );
};

export default CommunicationCard;
