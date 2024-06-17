import { type ReactNode } from 'react';
import { PrettyChatWindow } from 'react-chat-engine-pretty';
import { UserType } from '../types.ts';

const ChatsPage = ({ username, secret }: UserType): ReactNode => {
  return (
    <div style={{ height: '100vh' }}>
      <PrettyChatWindow
        projectId="df68a794-2655-4492-b246-2cf0e2715fba"
        username={username}
        secret={secret}
        style={{ height: '100%' }}
      />
    </div>
  );
};

export default ChatsPage;
