const baseUrl = "/api/communication";

export const getAllComCards = () => {
  return fetch(baseUrl).then((res) => res.json());
};

// export const getComCardById = (userId) => {
//   return fetch(`${baseUrl}/$userId}`).then((res) => res.json());
// };

// export const addComCard = (com) => {
//   return fetch(baseUrl, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(com),
//   });
// };

// export const updateComCard = (editedCom) => {
//   return fetch(`${baseUrl}/${editedCom.id}`, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(editedCom),
//   });
// };

export const deleteComCard = (id) => {
  return fetch(`${baseUrl}/${id}`, {
    method: "DELETE",
  });
};
