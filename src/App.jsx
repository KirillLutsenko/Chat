import React, { useState, useRef } from 'react';
import { Chat } from 'components/Chat';
import { LoginPage } from 'AppStyles';
import { LoginForm } from 'components/LoginForm';
import { getUniqueID } from './helpers';

export default function App() {
  const [userName, setUserName] = useState('');
  const refId = useRef(getUniqueID());


  return (
    <LoginPage>
      {!userName && (
        <LoginForm setUserName={setUserName} />
      )}

      {userName && (
        <Chat id={refId.current} userName={userName} />
      )}
    </LoginPage>
  );
}
