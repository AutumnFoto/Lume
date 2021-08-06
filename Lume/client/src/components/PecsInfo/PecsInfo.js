import React from "react";
import "./PecsInfo.css";
import { useHistory } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { fas-fa-arrow-circle-right} from "@fortawesome/free-solid-svg-icons";

const PecsCard = () => {
  const history = useHistory();

  return (
    <div className="PecsCard">
      <h3 className="pecdescription">
        "The Picture Exchange Communication System, or PECS, allows people with
        little or no communication abilities to communicate using pictures."
      </h3>
      <img className="pecimage" src="/images/pecs.png" alt="pecs" />

      <button className="yn" type="button" onClick={() => history.push(`/yn`)}>
        {" "}
        Go to Yes or No Page
        {/* <FontAwesomeIcon icon={faEdit} size="1x" className="edit" /> */}
      </button>
      <button
        className="com"
        type="button"
        onClick={() => history.push(`/Communication`)}
      >
        {" "}
        Go to Communication Page
        {/* <FontAwesomeIcon icon={faArrow} size="1x" className="edit" /> */}
      </button>
    </div>
  );
};

export default PecsCard;
