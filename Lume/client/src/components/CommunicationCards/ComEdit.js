import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  updateCommunication,
  getByUser,
} from "../modules/CommunicationManager";
import { useParams } from "react-router-dom";

const CommunicationEdit = () => {
  const [commnuication, setCommunication] = useState([]);
  const { id } = useParams();
  const history = useHistory();
  // const [isLoading, setIsLoading] = useState(false);
};

const handleInputChange = (evt) => {
  const value = evt.target.value;
  const key = evt.target.id;

  const commmunicationCopy = { ...editedCom };

  communicationCopy[key] = value;
  setEditCom(communicationCopy);
};

const getCardsByUser = () => {
  return getByUser().then((c) => {
    setCommunication(c);
  });
};

const handleUpdate = (evt) => {
  evt.PreventDefault();

  const editedCom = {
    id: editCom.id,
  };
};
