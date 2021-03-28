export const BASE_URL = 'https://cryptic-sea-94299.herokuapp.com';

export const addConnection = (signal) => {
  return fetch(`${BASE_URL}/connect`, { signal })
  .then(res => {
    if (!res.ok) {
      throw new Error(`${res.status} - ${res.statusText}`);
    }

    return res.json();
  })
  .then(res => res)
}

export const addMessage = (userName, messageValue, time, id) => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  fetch(`${BASE_URL}/getmessage?username=${userName}&message=${messageValue}&time=${time}&id=${id}`, requestOptions)
  .then(response => response.text())
  .then(result => result)
  .catch(error => {
    console.warn('Error:', error);
  });
}

export const addMessageWithPostMethod = (userName, messageValue, time, id) => {
  fetch(`${BASE_URL}/postmessage`, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    },
    body: JSON.stringify({
      username: userName,
      message: messageValue,
      time: time,
      id: id
    }),
  })
  .then(response => response.text())
  .then(result => result)
  .catch(error => {
    console.warn('Error:', error);
  });
}
