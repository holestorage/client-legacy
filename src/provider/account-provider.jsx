import {createContext} from 'react';
import {useAxios} from '../App';

export const AccountContext = createContext('account');

export default function AccountProvider({children}) {
    const [{data, loading, error}] = useAxios('user');

    return (
        <AccountContext.Provider value={{loading: loading, error: error, user: data?.user}}>
            {children}
        </AccountContext.Provider>
    );
}
