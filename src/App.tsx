import React from 'react';
import Routes from './routes/index.routes';
import GlobalStyle from './styles/global';

const App: React.FC = React.memo(() => {
  return (
    <>
      <GlobalStyle />
      <Routes />
    </>
  );
});

export default App;
