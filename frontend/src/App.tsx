import { type ReactNode, useState } from 'react';

import './App.css';

import AuthPage from './components/AuthPage.tsx';
import ChatsPage from './components/ChatsPage.tsx';

import { UserType } from './types.ts';

function App(): ReactNode {
  const [user, setUser] = useState<UserType>(undefined);

  if (!user) {
    return <AuthPage onAuth={(user: UserType) => setUser(user)} />;
  } else {
    return <ChatsPage {...user} />;
  }
}

export default App;
