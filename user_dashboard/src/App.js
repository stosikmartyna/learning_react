import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Form } from './components/Form/Form';
import { Table } from './components/Table/Table';
import { header } from './App.styles';

export const App = () => {
  return (
    <>
      <h1 className={header}>Dashboard</h1>
      <Switch>
        <Route exact path={'/'}>
          <Table />
        </Route>
        <Route path={'/form'}>
          <Form />
        </Route>
      </Switch>
    </>
  );
}