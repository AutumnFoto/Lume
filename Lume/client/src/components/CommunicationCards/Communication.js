import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "reactstrap";
import { Card, CardBody } from "reactstrap";
import {
  deleteCommunication,
  getByUser,
} from "../modules/CommunicationManager";

const CommunicationCard = ({ communication }) => {
  const handleDelete = () => {
    if (window.confirm("Do you want to delete this card?")) {
      deleteCommunication(communication.id).then(() => getByUser());
    }
  };

  const history = useHistory();

  return (
    <Card className="CommunicationCard">
      <CardBody>
        <h3> {communication.content}</h3>
        <p>{communication.image}</p>
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
