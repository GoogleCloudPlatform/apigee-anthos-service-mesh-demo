import type { Component } from 'solid-js';
import { Header } from './components/Header';
import { ContentContainer } from './components/Content';

import logo from './logo.svg';
import styles from './App.module.css';

const App: Component = () => {
  return (
    <div style="height: 100%">
      <Header></Header>
      <ContentContainer></ContentContainer>
    </div>
  );
};

export default App;
