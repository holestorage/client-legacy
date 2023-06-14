import './App.css';

import MainView from "./components/view/app/main-view";

import * as qs from "qs";
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const HoleApi = axios.create({
    baseURL: 'http://localhost:4000/api/v1/',
    timeout: 1000,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': cookies.get('token') as string
    },
    paramsSerializer: (params) => qs.stringify(params)
});

function App() {
    return (
        <div className="App">
            <MainView/>
        </div>
    );
}

export default App;
