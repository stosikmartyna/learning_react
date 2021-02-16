import React from 'react'; 
import { Switch, Route } from 'react-router-dom'; 
import { CountryDetails } from './components/Countries/CountryDetails';
import { Countries } from './components/Countries/Countries';
import { DataFromJson } from './components/DataFromJson/DataFromJson';
import { Form } from './components/Form/Form';

export const App = () => {
  return (
    <Switch>
      <Route exact path={'/'}>
        <Form />
      </Route>
      <Route path={'/dataFromJson'} >
        <DataFromJson />
      </Route>
      <Route path={'/countries/:id'}>
        <CountryDetails />
      </Route>
      <Route path={'/countries'}>
        <Countries />
      </Route>
    </Switch>
  );
}