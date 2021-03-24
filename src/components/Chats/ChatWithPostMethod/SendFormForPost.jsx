import React, { useState } from 'react';
import { SendButton, SendFormWrapper, TextArea } from 'AppStyles';
import { sendHelperForPostRequest } from 'helpers';

export const SendFormForPost = ({ userName, id, checkboxStatus }) => {
  const [messageValue, setMessageValue] = useState('');

  const handleKeyPressForSend = (e) => {
    if (!e.shiftKey && e.key === 'Enter' && messageValue.trim()) {
      e.preventDefault();
      sendHelperForPostRequest(userName, messageValue, id, setMessageValue);
    }
  }

  const sendMessage = () => {
    if (messageValue) {
      sendHelperForPostRequest(userName, messageValue, id, setMessageValue);
    }
  }

  return (
    <SendFormWrapper >
      <TextArea
        placeholder="Enter your message"
        id="textarea"
        cols="45"
        rows="3"
        value={messageValue}
        onChange={e => setMessageValue(e.target.value)}
        onKeyPress={e => handleKeyPressForSend(e)}
        wrap="soft"
        disabled={!checkboxStatus}
      />
      <SendButton
        type="button"
        onClick={sendMessage}
        disabled={!checkboxStatus}
      >
        Send
      </SendButton>
    </SendFormWrapper>
  )
}
