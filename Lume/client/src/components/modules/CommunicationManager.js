import { getToken } from "./authManager";

const baseUrl = "/api/Communication";

// getting all cards by user
export const getComCardByCurrentUser = () => {
  return getToken().then((token) => {
    return fetch(`${baseUrl}/ByCurrentUser`, {
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
  return getToken().then((token) => {
    return fetch(baseUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(communication),
    });
  });
};

export const getComCardById = (id) => {
  return getToken().then((token) => {
    return fetch(`${baseUrl}/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => res.json());
  });
};

// edit comm card
// export const updateCommunication = (id) => {
//   return getToken().then((token) =>
//     fetch(`${baseUrl}/${id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//       body: JSON.stringify(id),
//     })
//   );
// };

export const editCommunication = (communication) => {
  return getToken().then((token) => {
    return fetch(`${baseUrl}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(communication),
    });
  });
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
