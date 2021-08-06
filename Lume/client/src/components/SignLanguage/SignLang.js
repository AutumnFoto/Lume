import React from "react";
import { deleteSigns, getSignByCurrentUser } from "../modules/SignLangManager";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

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

  return (
    <div className="SignCard">
      <h3 className="signname"> {sign.name}</h3>
      <img className="image" src={sign.image} alt="signs" />

      <button className="deletesignbtn" onClick={() => handleDelete(sign.id)}>
        Delete
        <FontAwesomeIcon icon={faTrash} size="1x" className="delete" />
      </button>
    </div>
  );
};

export default SignLangCard;
