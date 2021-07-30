import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import {
  addComCard,
  getAllComCards,
  getCurrentUserCom,
} from "../../modules/CommunicationManager";

const CommAddForm = () => {
  const [communication, setCommunication] = useState([]);
  const history = useHistory();

  const getCards = () => {
    getAllComCards().then((communication) => setCommunication(communication));
  };

  // const getCurrentUserCard = () => {
  //   getCurrentUserCom().then((communication) =>
  //     setCommunication(communication)
  //   );
  // };

  useEffect(() => {
    getCards();
  }, []);

  const handleInputChange = (event) => {
    const value = event.target.value;
    const key = event.target.id;

    const comCopy = { ...communication };

    comCopy[key] = value;
    setCommunication(comCopy);
  };

  const handleSave = (event) => {
    event.preventDefault();
    addComCard(communication).then(() => {
      // Navigate the user back to the home route
      history.push("/Communication");
    });
  };

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
