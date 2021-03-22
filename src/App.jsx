import React, { useState, useRef } from 'react';
import { Chat } from './components/Chat';
import { LoginPage } from './AppStyles';
import { LoginForm } from './components/LoginForm';
import { getUniqueID } from './helpers';
import { Redirect, Route, Switch } from 'react-router-dom';

export default function App() {
  const [userName, setUserName] = useState('');
  const refId = useRef(getUniqueID());


  return (
    <Switch>
      <Route path="/my-chat">
        <Chat id={refId.current} userName={userName} />
      </Route>

      <Route path="/login">
        <LoginPage>
          <LoginForm setUserName={setUserName} />
        </LoginPage>
      </Route>

      <Redirect path="/" to="/Login" />
    </Switch>
  );
}
