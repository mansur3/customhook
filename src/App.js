import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react";


function useTimeout(delay) {

const [ready, setReady] = useState(false);

useEffect(() => {

 let timer =  setTimeout(() => { 
    setReady(true);
    clearTimeout(timer);
 }, delay * 1000)


}, [])


return {ready}

}





function App() {

  const {ready} = useTimeout(3)

  if(!ready) {
    return (
      <div>...loading</div>
    )
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
