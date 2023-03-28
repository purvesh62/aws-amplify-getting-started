import reactLogo from './assets/react.svg'
import viteLogo from '/public/vite.svg'
import './App.css'
import axios from "axios";
import {useEffect} from "react";

function App() {
    useEffect(() => {
        axios.get('https://c356-134-41-179-198.ngrok.io/events?query=system&type=Free').then((response) => {
            console.log(response.data);
        })
    }, [])
    return (
        <div className="App">
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo"/>
                </a>
                <a href="https://reactjs.org" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo"/>
                </a>
            </div>
            <h1>AWS Amplify Getting Started</h1>
        </div>
    )
}

export default App
