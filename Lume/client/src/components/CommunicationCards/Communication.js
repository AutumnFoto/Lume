import React from "react";
import { Button } from "reactstrap";
import { Card, CardBody } from "reactstrap";
import { deleteComCard } from "../../modules/CommunicationManager";

const CommunicationCard = ({ communication, getCommunication }) => {
  const handleDelete = () => {
    if (window.confirm("Do you want to delete this card?")) {
      deleteComCard(communication.id).then(() => getCommunication());
    }
  };

  return (
    <Card className="CommunicationCard">
      <CardBody>
        <h3> {communication.content}</h3>
        <p>{communication.image}</p>
        {console.log(communication)}
        <Button className="btn btn-danger" onClick={handleDelete}>
          Delete
        </Button>
      </CardBody>
    </Card>
  );
};

export default CommunicationCard;
