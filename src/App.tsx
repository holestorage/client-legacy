import './App.css';

import MainView from "./components/view/app/main-view";

import axios from 'axios';

export const HoleApi = axios.create({
    baseURL: 'http://localhost:4000/api/v1/',
    timeout: 1000,
    headers: {
        'content-type': 'application/x-www-form-urlencoded'
    },
});

function App() {
    return (
        <div className="App">
            <MainView/>
        </div>
    );
}

export default App;
