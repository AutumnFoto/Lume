import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import {
  updateCommunication,
  getByUser,
} from "../modules/CommunicationManager";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

const ComEdit = () => {
  const { id } = useParams();
  const history = useHistory();

  const [editCom, setEditCom] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  // initial state set to false

  const handleInputChange = (evt) => {
    const value = evt.target.value;
    const key = evt.target.id;

    const comCopy = { ...editCom };

    comCopy[key] = value;
    setEditCom(comCopy);
  };

  const getCom = () => {
    return getByUser().then((c) => {
      setEditCom(c);
    });
  };

  const handleUpdate = (evt) => {
    evt.preventDefault();
    setIsLoading(true);
    let comCopy = { ...editCom };

    updateCommunication(comCopy).then(() => history.push(`/communication`));
  };

  useEffect(() => {
    getCom();
  }, []);
  //     const editedCom = {
  //       id: editCom.id,
  //       content: editCom.content,
  //       image: editCom.image,
  //     };
  //     updateCommunication(editedCom).then((c) => {
  //       history.push("/Communication");
  //     });
  //   };

  //   useEffect(() => {
  //     getCom();
  //     getByUser().then((c) => {
  //       setEditCom(c);
  //     });
  //   }, []);

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

// const CommunicationEdit = () => {
//   const [commnuication, setCommunication] = useState([]);
//   const { id } = useParams();
//   const history = useHistory();
//   // const [isLoading, setIsLoading] = useState(false);
// };

// const handleInputChange = (evt) => {
//   const value = evt.target.value;
//   const key = evt.target.id;

//   const commmunicationCopy = { ...editCom };

//   communicationCopy[key] = value;
//   setEditCom(communicationCopy);
// };

// const getCardsByUser = () => {
//   return getByUser().then((c) => {
//     setCommunication(c);
//   });
// };

// const handleUpdate = (evt) => {
//   evt.PreventDefault();

//   const editedCom = {
//     id: editCom.id,
//     userProfileId: editCom.userProfileId,
//     content: editCom.content,
//     image: editCom.image,
//   };
// };
