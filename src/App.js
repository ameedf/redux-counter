import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Counter1 from './components/Counter1';
import { applicationStore } from './data/appStore';

function App() {
  return (
    <Provider store={applicationStore}>
      <div className="App">
        <Counter1 />
      </div>
    </Provider>
  );
}

export default App;
