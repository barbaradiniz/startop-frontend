import React from 'react';
import { AuthProvider } from './auth';

const AppProvider = React.memo(({ children }) => {
    return (
        <AuthProvider>
            { children }
        </AuthProvider>
    );
});

export default AppProvider;