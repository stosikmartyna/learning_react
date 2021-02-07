import React from 'react'; 
import { DataFromJson } from './components/DataFromJson/DataFromJson';
import { Form } from './components/Form/Form';

export const App = () => {
  return (
    <>
      <Form />
      <hr />
      <DataFromJson />
    </>
  );
}