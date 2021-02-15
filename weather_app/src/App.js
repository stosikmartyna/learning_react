import React from 'react';
import { MainView } from './components/MainView/MainView';
import { container } from './App.styles';

export const App = () => {
  return (
    <div className={container}>
      <MainView />
    </div>
  );
}