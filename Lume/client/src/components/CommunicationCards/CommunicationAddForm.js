import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { addComCard } from "../modules/CommunicationManager";

const CommAddForm = () => {
  const history = useHistory();
  const { userProfileId } = useParams();
  const [communication, setCommunication] = useState({
    userProfileId: userProfileId,
    content: "",
    image: "",
  });

  const handleInputChange = (event) => {
    let newCommunication = { ...communication };
    let selectedValue = event.target.value;
    newCommunication[event.target.id] = selectedValue;
    setCommunication(newCommunication);
  };

  const handleSave = () => {
    // event.preventDefault();
    addComCard(communication).then(() =>
      // Navigate the user back to the home route
      history.push(`/${userProfileId}`)
    );
  };

  // const handleInputChange = (event) => {
  //   const value = event.target.value;
  //   const key = event.target.id;

  //   const getCards = () => {
  //     getAllComCards().then((communication) => setCommunication(communication));
  //   };

  // const getCurrentUserCard = () => {
  //   getCurrentUserCom().then((communication) =>
  //     setCommunication(communication)
  //   );
  // };

  //   useEffect(() => {
  //     getCards();
  //   }, []);

  //   const comCopy = { ...communication };

  //   comCopy[key] = value;
  //   setCommunication(comCopy);
  // };

  return (
    <>
      <Form>
        <FormGroup>
          <Label for="content">Communication</Label>
          <Input
            type="text"
            id="content"
            placeholder="text..."
            value={communication.content}
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="image">Image</Label>
          <Input
            type="text"
            id="image"
            placeholder="img..."
            value={communication.image}
            onChange={handleInputChange}
          />
        </FormGroup>

        <Button className="btn btn-primary" onClick={handleSave}>
          Submit
        </Button>
      </Form>
    </>
  );
};

export default CommAddForm;
