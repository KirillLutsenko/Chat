import React, { useState } from 'react';
import { LoginButton, LoginFormWrapper, LoginInput } from 'AppStyles';
import { handleKeyPressForLogin } from '../helpers';

export const LoginForm = ({ setUserName }) => {
  const [nameValue, setNameValue] = useState('');

  const checkIn = () => {
    setUserName(nameValue);
  }

  return (
    <LoginFormWrapper>
      <LoginInput
        type="text"
        placeholder="Enter your name"
        value={nameValue}
        onChange={e => setNameValue(e.target.value)}
        onKeyPress={e => handleKeyPressForLogin(e, nameValue, setUserName)}
      />
      <LoginButton
        type="button"
        onClick={checkIn}
      >
         Log in
      </LoginButton>
    </LoginFormWrapper>
  )
}
