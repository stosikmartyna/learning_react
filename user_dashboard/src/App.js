import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Form } from './components/NewUserForm/Form';
import { Table } from './components/Table/Table';
import { header } from './App.styles';

export const App = () => {
  const [users, setUsers] = useState(undefined);

  return (
    <>
      <h1 className={header}>Dashboard</h1>
      <Switch>
        <Route exact path={'/'}>
          <Table users={users} setUsers={setUsers} />
        </Route>
        <Route exact path={'/create'}>
          <Form users={users} setUsers={setUsers} />
        </Route>
        <Route path={'/edit/:id'}>
          <Form />
        </Route>
      </Switch>
    </>
  );
}