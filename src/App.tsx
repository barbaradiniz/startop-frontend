import React from 'react';
import { AuthProvider } from './hooks/auth';
import Routes from './routes/index.routes';
import GlobalStyle from './styles/global';

const App: React.FC = React.memo(() => {
  return (
    <>
      <GlobalStyle />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </>
  );
});

export default App;
