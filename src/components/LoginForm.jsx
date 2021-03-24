import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LoginButton, LoginFormWrapper, LoginInput } from 'AppStyles';

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
      />
      {nameValue ? (
        <Link
          to={'/querymethods'}
        >
          <LoginButton
            type="button"
            onClick={checkIn}
          >
            Log in
          </LoginButton>
        </Link>
      ) : (
        <LoginButton
          type="button"
          onClick={checkIn}
        >
          Log in
        </LoginButton>
      )}
    </LoginFormWrapper>
  )
}
