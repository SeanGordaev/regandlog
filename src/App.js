import { useState, useEffect, use } from 'react';
import './App.css';
import {Reg, Log} from './components/Theme.js'
import './style/bg.css'

function App() {

  const [theme, setTheme] = useState("Log");
  const [text, setText] = useState("Welcome In");
  const [i, seti] = useState(0);
  const [WI, setWI] = useState("");
  let t = null;

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
          <span className='title'>{theme === "Log" ? "Reg" : "Log"}</span>
          {
            theme === "Log" ? <Reg/> : <Log/>
          }
          <button className='theme' onClick={() => changeTheme()}>{theme}</button>
        </div>

        
        <div className='textPlace'>
          <span className='bg_text'>
            {theme !== "Log" ? ("Welcome Back") : ("Welcome In")}
          </span>
        </div>

      </header>
    </div>
  );
}

export default App;
