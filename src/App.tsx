import React from 'react';
import AppProvider from './hooks';
import Routes from './routes/index.routes';
import GlobalStyle from './styles/global';

const App: React.FC = React.memo(() => {
  return (
    <>
      <GlobalStyle />
      <AppProvider>
        <Routes />
      </AppProvider>
    </>
  );
});

export default App;
