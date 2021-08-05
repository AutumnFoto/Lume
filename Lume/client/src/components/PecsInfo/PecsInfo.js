import React from "react";
import { Card, CardBody } from "reactstrap";

const PecsCard = () => {
  return (
    <Card className="PecsCard">
      <CardBody>
        <img src="/images/pecs.png" alt="pecs" />
        <img src="/images/pecsinfo2.png" alt="pecs2" />
      </CardBody>
    </Card>
  );
};

export default PecsCard;
