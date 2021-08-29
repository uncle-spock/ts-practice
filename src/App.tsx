import React from 'react';

import styles from './App.module.scss';
import Header from './components/header/Header';

function App() {
  return (
    <div className={styles.app}>
      <Header />
    </div>
  );
}

export default App;
