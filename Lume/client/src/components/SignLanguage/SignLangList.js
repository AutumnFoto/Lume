import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import SignLangCard from "./SignLang";
import {
  getSignByUserId,
  deleteSign,
  getSignByCurrentUser,
} from "../modules/SignLangManager";
import { getCurrentUserProfileID } from "../modules/authManager";

const SignList = () => {
  const [signs, setSigns] = useState([]);

  const [isDeleted, setIsDeleted] = useState(false);
  const getSignCard = () => {
    getSignByCurrentUser().then((signs) => setSigns(signs));
  };

  useEffect(() => {
    getSignCard();
  }, [isDeleted]);

  return (
    <>
      <Link to={`/signs/create`}>Add A New Sign</Link>
      <div>
        <div>
          {signs.map((sign) => (
            <SignLangCard
              sign={sign}
              key={sign.id}
              setIsDeleted={setIsDeleted}
              isDeleted={isDeleted}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SignList;
