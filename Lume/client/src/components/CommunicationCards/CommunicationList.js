import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardBody, Button } from "reactstrap";
import CommunicationCard from "./Communication";
import { getAllComCards } from "../../modules/CommunicationManager";

const CommunicationList = () => {
  const [communication, setCommunication] = useState([]);

  const getCommunication = () => {
    return getAllComCards().then((res) => setCommunication(res));
  };

  useEffect(() => {
    getCommunication();
  }, []);

  return (
    <div className="container m-2">
      <div className="row justify-content-center">
        <Card className="communication">
          <CardBody>
            {/* <h3> {communication.Content}</h3>
            <p>{communication.Image}</p> */}

            <Link to={`/communication`}>
              <Button className="btn btn-success">Create Card</Button>
            </Link>
          </CardBody>
        </Card>
      </div>
      <div className="row justify-content-center">
        {communication.map((communication) => (
          <CommunicationCard
            communication={communication}
            key={communication.id}
            getCommunication={getCommunication}
          />
        ))}
      </div>
    </div>
  );
};
export default CommunicationList;
