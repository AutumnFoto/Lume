import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { addComCard } from "../modules/CommunicationManager";

const ComAddForm = () => {
  const history = useHistory();
  // const { userProfileId } = useParams();
  const [communication, setCommunication] = useState({
    // userProfileId: userProfileId,
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
    // communication.id = userProfileId;
    addComCard(communication).then(() =>
      // Navigate the user back to the home route
      history.push(`/communication`)
    );
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
          <Label for="url">Image</Label>
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

export default ComAddForm;
