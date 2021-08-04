import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "reactstrap";
import { Card, CardBody } from "reactstrap";
import {
  deleteCommunication,
  getComCardByCurrentUser,
} from "../modules/CommunicationManager";

const CommunicationCard = ({ communication, isDeleted, setIsDeleted }) => {
  const handleDelete = (id) => {
    if (window.confirm("Do you want to delete this card?")) {
      deleteCommunication(id).then(() => {
        setIsDeleted(!isDeleted);
        getComCardByCurrentUser();
      });
    }
  };

  //  bang changes false to true on the deleted use state

  const history = useHistory();

  return (
    <Card className="CommunicationCard">
      <CardBody>
        <h3> {communication.content}</h3>
        <img src={communication.image} alt="communication" />
        <button
          onClick={() =>
            history.push(`/communication/edit/${communication.id}`)
          }
        >
          Edit
        </button>

        <Button
          className="btn btn-danger"
          onClick={() => handleDelete(communication.id)}
        >
          Delete
        </Button>
      </CardBody>
    </Card>
  );
};

export default CommunicationCard;
