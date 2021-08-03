import { getToken } from "./authManager";

const baseUrl = "/api/Communication";

// getting all the communication cards
export const getAllCommunications = () => {
  return getToken().then((token) => {
    return fetch(baseUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error(
          "An unknown error occurred while trying to get all communications"
        );
      }
    });
  });
};

// getting cards by user
export const getByUser = () => {
  return getToken().then((token) => {
    return fetch(`${baseUrl}/user`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
    });
  });
};

//  adding communication card

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

// edit comm card
export const updateCommunication = (id) => {
  return getToken().then((token) =>
    fetch(`${baseUrl}/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(id),
    })
  );
};
// delete communication card

export const deleteCommunication = (id) => {
  return getToken().then((token) => {
    return fetch(`${baseUrl}/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
  });
};

// export const getCurrentUserCom = () => {
//   return getToken().then((token) => {
//     return fetch(`${baseUrl}/${firebase.auth().currentUser.uid}`, {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     }).then((resp) => {
//       if (resp.ok) {
//         return resp.json();
//       } else {
//         throw new Error(
//           "An unknown error occurred while trying to get the current user"
//         );
//       }
//     });
//   });
// };
