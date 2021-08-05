import React from "react";
// import { useHistory } from "react-router-dom";
import { Button } from "reactstrap";
import { Card, CardBody } from "reactstrap";
import { deleteSigns, getSignByCurrentUser } from "../modules/SignLangManager";

const SignLangCard = ({ sign, isDeleted, setIsDeleted }) => {
  const handleDelete = (id) => {
    if (window.confirm("Do you want to delete this card?")) {
      deleteSigns(id).then(() => {
        setIsDeleted(!isDeleted);
        getSignByCurrentUser();
      });
    }
  };

  //  bang changes false to true on the deleted use state

  //   const history = useHistory();

  return (
    <Card className="SignCard">
      <CardBody>
        <h3> {sign.name}</h3>
        <img src={sign.image} alt="signs" />

        <Button
          className="btn btn-danger"
          onClick={() => handleDelete(sign.id)}
        >
          Delete
        </Button>
      </CardBody>
    </Card>
  );
};

export default SignLangCard;
