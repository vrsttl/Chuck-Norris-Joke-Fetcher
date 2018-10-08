import * as React from 'react';
import './App.css';
import ChuckJokes from './containers/ChuckJokes';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <ChuckJokes />
      </div>
    );
  }
}

export default App;
