import firebase from "firebase/app";
import "firebase/auth";

const baseUrl = "/api/communication";
export const getToken = () => firebase.auth().currentUser.getIdToken();

// getting all the communication cards
export const getAllComCards = () => {
  return fetch(baseUrl).then((res) => res.json());
};

export const getCurrentUserCom = () => {
  return getToken().then((token) =>
    fetch(`${baseUrl}/Communication`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((resp) => resp.json())
  );
};

export const addComCard = (communication) => {
  return getToken().then((token) =>
    fetch(baseUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(communication),
    }).then((resp) => resp.json())
  );
};

//   export const deleteComCard = (id) => {
//     return getToken().then((token) =>
//         fetch(`${baseUrl}/${id}`, {
//             method: "DELETE",
//             headers: {
//                 Authorization: `Bearer ${token}`
//             }
//         }));
// };
