import React from 'react';
import { Form } from './components/Form/Form';
import { Table } from './components/Table/Table';
import { header } from './App.styles';

export const App = () => {
  return (
    <>
      <h1 className={header}>Dashboard</h1>
      <Form />
      <Table />
    </>
  );
}