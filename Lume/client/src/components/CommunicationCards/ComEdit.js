import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import {
  getComCardById,
  editCommunication,
} from "../modules/CommunicationManager";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import CommunicationCard from "./Communication";

const ComEdit = () => {
  const [editCom, setEditCom] = useState([]);
  const { id } = useParams();

  const history = useHistory();

  useEffect(() => {
    return getComCardById(id).then((editCom) => setEditCom(editCom));
  }, []);
  console.log(editCom);
  //   const communication = getComCardById(id);
  //   setEditCom = communication;

  const handleInputChange = (evt) => {
    const value = evt.target.value;
    const key = evt.target.id;

    const comCopy = { ...editCom };

    comCopy[key] = value;
    setEditCom(comCopy);
  };

  const handleUpdate = (evt) => {
    evt.preventDefault();
    const communication = { ...editCom };

    const editedCommunication = {
      id: id,
      content: communication.content,
      image: communication.image,
    };

    editCommunication(editedCommunication).then(() => {
      history.push("/communication");
    });
  };

  return (
    <Form className="container w-25 text-center">
      <h2>Edit Communication Card</h2>
      <FormGroup>
        <Label for="content">Content</Label>
        <Input
          type="text"
          name="content"
          id="content"
          placeholder="content.."
          value={editCom.content}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="image">Image</Label>
        <textarea
          type="text"
          name="image"
          id="image"
          placeholder="image"
          value={editCom.image}
          onChange={handleInputChange}
        />
      </FormGroup>

      <Button className="btn btn-primary" onClick={handleUpdate}>
        Submit
      </Button>
      <Button
        className="btn btn-primary"
        onClick={() => history.push(`/Communication`)}
      >
        Cancel
      </Button>
    </Form>
  );
};

export default ComEdit;
