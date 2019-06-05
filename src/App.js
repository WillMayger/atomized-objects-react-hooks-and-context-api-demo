import React from 'react';
import { useStore } from './store/useStore';
import './App.css';
import { modifyText, add, minus } from './store/actions';

function App() {
  const { state, dispatch } = useStore();
  return (
    <div className="App">
      <header className="App-header">
        <input value={state.test.text || ''} onChange={(e) => dispatch(modifyText(e.target.value))} />
        <p>
          {state.test.text}
        </p>

        <p>{state.count}</p>
        <button onClick={() => dispatch(add())}>add</button>
        <button onClick={() => dispatch(minus())}>minus</button>
      </header>
    </div>
  );
}

export default App;
