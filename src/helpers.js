import { addMessage } from 'api';
const sendTime = new Date().toLocaleTimeString();

export const sendHelper = (userName, messageValue, id, setMessageValue) => {
  addMessage(userName, messageValue, sendTime, id)
  setMessageValue('');
}


export const getUniqueID = () => {
  let uniqueNumber = Math.round(Math.random() * 1000000 + 100000);
  let time = new Date().getTime();

  return uniqueNumber.toString() + '-' + time.toString();
}

export const handleKeyPressForLogin = (e, nameValue, setUserName) => {
  if (e.key === 'Enter' && nameValue.trim()) {
    e.preventDefault();
    setUserName(nameValue)
  }
}
