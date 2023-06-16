import './App.css';

import MainView from "./components/view/app/main-view";

import * as qs from "qs";
import axios from 'axios';
import Cookies from 'universal-cookie';
import PopupProvider from "./components/provider/popup-provider";

export const cookies = new Cookies();

const token = cookies.get('token') as string;

export const HoleApi = axios.create({
    baseURL: 'http://localhost:4000/api/v1/',
    timeout: 12000,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': token && `Bearer ${token}`
    },
    paramsSerializer: (params) => qs.stringify(params)
});

function App() {
    return (
        <div className="App">
            <PopupProvider>
                <MainView/>
            </PopupProvider>
        </div>
    );
}

export default App;
