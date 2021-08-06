import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { addSignCard } from "../modules/SignLangManager";

const SignAddForm = () => {
  const history = useHistory();

  const [signs, setSigns] = useState({
    name: "",
    image: "",
  });

  const handleInputChange = (event) => {
    let newSignLang = { ...signs };
    let selectedValue = event.target.value;
    newSignLang[event.target.id] = selectedValue;
    setSigns(newSignLang);
  };

  const handleSave = () => {
    addSignCard(signs).then(() =>
      // Navigate the user back to the home route
      history.push(`/signs`)
    );
  };

  return (
    <>
      <Form>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input
            type="text"
            id="name"
            placeholder="text..."
            value={signs.Name}
            onChange={handleInputChange}
          />
        </FormGroup>

        <FormGroup>
          <Label for="url">Image</Label>
          <Input
            type="text"
            id="image"
            placeholder="img..."
            value={signs.image}
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

export default SignAddForm;
