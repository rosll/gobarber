import React from 'react';
import Signin from './pages/signin'
//import Signup from './pages/signup'
import GlobalStyle from './styles/Global'
import { AuthProvider } from './hooks/AuthContext'

const App: React.FC = () => (
  <>
    <AuthProvider>
      <Signin />
    </AuthProvider>
    <GlobalStyle />
  </>
)

export default App;
