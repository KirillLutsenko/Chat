import React, { useEffect } from 'react';
import { addConnection } from '../api';
import {
  Messages,
  MyMessages,
  MessageText,
  DispatchTime,
  OtherMessages,
  UserName
} from '../AppStyles';

export const MessagesList = ({ id, messages, setMessages, checkboxStatus, signal }) => {
  useEffect(() => {
    if (checkboxStatus) {
      addConnection(signal)
        .then(res => setMessages([...messages, res]));
    }
  }, [messages, setMessages, checkboxStatus, signal])

  return(
    <Messages>
      {messages.map((message, index) => (
        (message.id === id) ? (
          <MyMessages key={`Key-${index}-${new Date(message.time).getTime()}`}>
            <UserName>{message.username}</UserName>
            <MessageText>{message.message}</MessageText>
            <DispatchTime>{message.time}</DispatchTime>
          </MyMessages>
        ) : (
          <OtherMessages key={`Key-${index}-${new Date(message.time).getTime()}`}>
            <UserName>{message.username}</UserName>
            <MessageText>{message.message}</MessageText>
            <DispatchTime>{message.time}</DispatchTime>
          </OtherMessages>
        )
      ))}
    </Messages>
  )
}