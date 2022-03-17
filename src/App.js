import React from 'react'
import { Chat, SignIn } from './components/index'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase'

function App() {

  const [user] = useAuthState(auth)

  return (
    <div className="App">
      { user ? <Chat /> : <SignIn />}
    </div>
  );
}

export default App;
