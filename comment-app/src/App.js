import React, { Component } from 'react';
import './App.css';

import Filter from 'components/Filter/Filter';
import Input from 'components/Input/Input';
import List from 'components/List/List';

class App extends Component {
  render() {
    return (
      <div> 
        <Input />
        <Filter />
        <List />
      </div>
    );
  }
}

export default App;
