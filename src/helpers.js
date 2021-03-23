import { addMessage } from './api';

export const sendHelper = (userName, messageValue, id, setMessageValue) => {
  addMessage(userName, messageValue, new Date().toLocaleTimeString(), id);
  setMessageValue('');
}

export const getUniqueID = () => {
  let uniqueNumber = Math.round(Math.random() * 1000000 + 100000);
  let time = new Date().getTime();

  return uniqueNumber.toString() + '-' + time.toString();
}
