import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import SignLangCard from "./SignLang";
import { getSignByCurrentUser } from "../modules/SignLangManager";
import "./SignLang.css";

const SignList = () => {
  const [signs, setSigns] = useState([]);

  const [isDeleted, setIsDeleted] = useState(false);
  const getSignCard = () => {
    getSignByCurrentUser().then((signs) => setSigns(signs));
  };

  useEffect(() => {
    getSignCard();
  }, [isDeleted]);

  const history = useHistory();

  return (
    <>
      <section className="signsection-content">
        <button
          className="add-btn"
          type="button"
          onClick={() => history.push(`/signs/create`)}
        >
          {" "}
          Add A New Card
        </button>
      </section>
      <div>
        <div className="container-CardBody">
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
