import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './frontend/clock';
import Tabs from './frontend/tabs';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  
  ReactDOM.render(
    <Root />,
    root
  );
  

});

const tabs = [
  {title: "Spongebob", content: "I'm ready!!!"}, 
  {title: "Patrick", content: "The inner machinations of my mind are an enigma."}, {title: "Squidward", content: "Don't you have to be stupid somewhere else?"}
];

const Root = function() {
  return (
    <div>
      <Clock />
      <Tabs tabs={tabs} />,
    </div>
  );
};