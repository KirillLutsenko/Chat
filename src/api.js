export const BASE_URL = 'http://localhost:5000';

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

  fetch(`${BASE_URL}/message?username=${userName}&message=${messageValue}&time=${time}&id=${id}`, requestOptions)
  .then(response => response.text())
  .then(result => result)
  .catch(error => {
    console.warn('Error:', error);
  });
}
