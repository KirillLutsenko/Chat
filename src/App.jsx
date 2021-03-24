import React, { useState, useRef } from 'react';
import { ChatWithGetMethod } from 'components/Chats/ChatWithGetMethod/ChatWithGetMethod';
import { ChatWithPostMethod } from 'components/Chats/ChatWithPostMethod/ChatWithPostMethod';
import { LoginPage } from 'AppStyles';
import { LoginForm } from 'components/LoginForm';
import { getUniqueID } from 'helpers';
import { Redirect, Route, Switch } from 'react-router-dom';
import { QueryMethods } from 'components/QueryMethods';

export default function App() {
  const [userName, setUserName] = useState('');
  const refId = useRef(getUniqueID());

  return (
    <Switch>
      <Route path="/chatwithgetmethod">
        <ChatWithGetMethod id={refId.current} userName={userName} />
      </Route>

      <Route path="/chatwithpostmethod">
        <ChatWithPostMethod id={refId.current} userName={userName} />
      </Route>

      <Route path="/querymethods">
        <QueryMethods />
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
