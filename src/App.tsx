import './App.css';

import MainView from "./components/view/app/main-view";

import * as qs from "qs";
import axios from 'axios';
import Cookies from 'universal-cookie';

export const cookies = new Cookies();

const token = cookies.get('token') as string;

export const HoleApi = axios.create({
    baseURL: 'http://localhost:4000/api/v1/',
    timeout: 1000,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': token && `Bearer ${token}`
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
