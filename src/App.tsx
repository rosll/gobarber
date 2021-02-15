import React from 'react';
import Signin from './pages/signin'
//import Signup from './pages/signup'
import GlobalStyle from './styles/Global'
import AppProvider from './hooks'


const App: React.FC = () => (
  <>
    <AppProvider>
      <Signin />
    </AppProvider>
    
    <GlobalStyle />
  </>
)

export default App;
