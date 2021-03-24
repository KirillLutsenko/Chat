import React, { useState, useRef, useEffect } from 'react';
import { ChatBody, MessagesArea } from 'AppStyles';
import { CheckboxBlock } from 'components/CheckboxBlock';
import { MessagesList } from 'components/Chats/CommonElements/MessagesList';
import { SendFormForPost } from 'components/Chats/ChatWithPostMethod/SendFormForPost'

export const ChatWithPostMethod = ({ userName, id }) => {
  const [checkboxStatus, setCheckboxStatus] = useState(true);
  const [messages, setMessages] = useState([]);
  const messagesRef = useRef(null);
  const controller = new AbortController();
  const signal = controller.signal;


  useEffect(() => {
    messagesRef.current.scrollTo(0, 99999);
  },[messages])

  const switchStatus = () => {
    setCheckboxStatus(!checkboxStatus);
    controller.abort();
  }

  return (
    <ChatBody>
      <CheckboxBlock
        switchStatus={switchStatus}
        checkboxStatus={checkboxStatus}
      />

      <MessagesArea ref={messagesRef}>
        <MessagesList
          id={id}
          messages={messages}
          setMessages={setMessages}
          checkboxStatus={checkboxStatus}
          signal={signal}
        />
      </MessagesArea>

      <SendFormForPost
        userName={userName}
        id={id}
        checkboxStatus={checkboxStatus}
      />
    </ChatBody>
  )
}
