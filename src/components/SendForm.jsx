import React, { useState } from 'react';
import { SendButton, SendFormWrapper, TextArea } from 'AppStyles';
import { sendHelper } from 'helpers';

export const SendForm = ({ userName, id, checkboxStatus }) => {
  const [messageValue, setMessageValue] = useState('');
  const [disabled] = useState(true);

  const handleKeyPressForSend = (e) => {
    if (!e.shiftKey && e.key === 'Enter' && messageValue.trim()) {
      e.preventDefault();
      sendHelper(userName, messageValue, id, setMessageValue)
    }
  }

  const sendMessage = () => {
    if (messageValue) {
      sendHelper(userName, messageValue, id, setMessageValue)
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
        disabled={(checkboxStatus) ? !disabled : disabled}
      />
      <SendButton
        type="button"
        onClick={sendMessage}
        disabled={(checkboxStatus) ? !disabled : disabled}
      >
        Send
      </SendButton>
    </SendFormWrapper>
  )
}
