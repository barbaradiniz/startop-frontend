import React, { useCallback, useContext, useState } from 'react';
import { createContext } from "react";
import api from '../services/api';

interface SignInCredentials {
    email: string;
    password: string;
}

interface SignUpCredentials {
    username: string;
    name: string;
    userType: 1 | 2;
    email: string;
    password: string;
}

interface AuthState {
    user: IUser;
}

interface IUser {
    name: string;
    email: string;
    userType: 1 | 2;
    username: string;
    password: string;
    _id: string;
}

interface AuthContextData {
    user: IUser;
    signIn(credentials: SignInCredentials): Promise<void>;
    signUp(credentials: SignUpCredentials): Promise<void>;
    signOut(): void;
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function useAuth() {
    const authContext = useContext(AuthContext);

    if(!authContext) throw new Error('useAuth must be used within an AuthProvider');

    return authContext;
}

export const AuthProvider : React.FC = ({ children }) => {
    const [data, setData] = useState<AuthState>({} as AuthState);

    const signIn = useCallback(async ({ email, password }: SignInCredentials) => {
        const res = await api.get('users');

        const user = res.data.find((user: any) => user.email === email);

        if(!password === user.password) {
            return;
        }

        setData({ user });
    }, []);

    const signOut = useCallback(() => {
        setData({} as AuthState);
    }, []);

    const signUp = useCallback(async (data: SignUpCredentials) => {
        const res = await api.post('users', data);

        const user = res.data;

        setData({ user });
    }, []);

    return (
        <AuthContext.Provider value={{ user: data.user, signIn, signOut, signUp }}>
            { children}
        </AuthContext.Provider>
    );
}