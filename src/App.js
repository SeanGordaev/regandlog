import { useState } from 'react';
import './App.css';
import {Reg, Log} from './components/Theme.js'

function App() {

  const [theme, setTheme] = useState("Log");

  const changeTheme = () => {
    if (theme === "Log"){
      setTheme("Reg");
    }
    else {
      setTheme("Log");
    }
  }

  return (
    <div className="App">
      <header className="App-header">

        <div className='Place'>

          <span>{theme === "Log" ? "Reg" : "Log"}</span>

          {
            theme === "Log" ? <Reg/> : <Log/>
          }

          <button className='theme' onClick={() => changeTheme()}>{theme}</button>


        </div>

      </header>
    </div>
  );
}

export default App;
