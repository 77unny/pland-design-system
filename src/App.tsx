import React from 'react';
import Button from './components/Button';
import Icon from './components/Icon';

function App() {
  return (
    <>
      <Button children={'Enter'}/>
      <Icon icon={'map'}/>
      <Icon icon={'map'} color={'#ED3432'} />
      <Icon icon={'phone'}/>
      <Icon icon={'phone'} color={'#EB6564'}/>
      <Icon icon={'phone'} color={'blue'}/>
      <Icon icon={'phone'} size={24}/>
    </>
  );
};

export default App;
