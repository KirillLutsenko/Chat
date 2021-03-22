import React, { useState, useRef, useEffect } from 'react';
import { ChatBody, MessagesArea } from 'AppStyles';
import { CheckboxBlock } from './CheckboxBlock';
import { MessagesList } from './MessagesList';
import { SendForm } from './SendForm'

export const Chat = ({ userName, id }) => {
  const [checkboxStatus, setCheckboxStatus] = useState(true);
  const [messages, setMessages] = useState([]);
  const messagesRef = useRef(null);

  useEffect(() => {
    messagesRef.current.scrollTo(0, 99999);
  },[messages])

  return (
    <ChatBody>
      <CheckboxBlock
        checkboxStatus={checkboxStatus}
        setCheckboxStatus={setCheckboxStatus}
      />

      <MessagesArea ref={messagesRef}>
        <MessagesList
          id={id}
          messages={messages}
          setMessages={setMessages}
        />
      </MessagesArea>

      <SendForm
        userName={userName}
        id={id}
        checkboxStatus={checkboxStatus}
      />
    </ChatBody>
  )
}
