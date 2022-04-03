import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

function App() {
    const [num, setNum] = useState(0);
    const getData = () => {
        axios.get('https://my-typescript-worker.tangxinfc.workers.dev').then((res) => {
            console.log("获取值", res)
            if (res && res.data && res.data.value) {
                setNum(res.data.value)
            }
        }).catch((err) => {
            console.log("获取失败", err)
        })
    }
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <button onClick={getData}>获取数据</button>
                <p>{num}</p>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
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
