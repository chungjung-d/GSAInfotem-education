import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useEffect, useState} from "react";

function App() {


  const [users, setUsers] = useState("ewqewewqeewq");

  const fetchUsers = async () => {
    try {
      const response = await axios.get(
          'http://localhost:4000/hello'
      );
      await setUsers(response.data.hello); // 데이터는 response.data 안에 들어있습니다.
      await console.log(response.data.hello)
    } catch (e) {
      console.log("ewewqewqeeqwewqewqewwwwwwwwwwwwwwwwwwwwwwwwwwwwwww")
    }
  };

  useEffect(() => {
    fetchUsers();
  },[])

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
        {users}
      </header>
    </div>
  );
}

export default App;
