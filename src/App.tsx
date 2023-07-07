import './App.css';

import MainView from "./components/view/app/main-view";

import * as qs from "qs";
import Cookies from 'universal-cookie';
import PopupProvider from "./provider/popup-provider";
import axios from "axios";
import ToastProvider from './provider/toast-provider';
import AccountProvider from "./provider/account-provider";

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
            <AccountProvider>
                <PopupProvider>
                    <ToastProvider>
                        <MainView/>
                    </ToastProvider>
                </PopupProvider>
            </AccountProvider>
        </div>
    );
}

export default App;
