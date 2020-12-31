import logo from './logo.svg';
import './App.css';

import SubmitButton from './component/SubmitButton.js';

function App() {
  return (
    <div className="App">
      <SubmitButton label="Envoyer" background="btn_primary btn_"/>
      <br/>
      <div id="text" ></div>
    </div>
  );
}

export default App;
