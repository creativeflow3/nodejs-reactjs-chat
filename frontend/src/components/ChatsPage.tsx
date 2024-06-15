import { type ReactNode } from 'react';
import { PrettyChatWindow } from 'react-chat-engine-pretty';
import { PropUserType } from '../types.ts';

const ChatsPage = ({ user }: PropUserType): ReactNode => {
  return (
    <div style={{ height: '100vh' }}>
      <PrettyChatWindow
        projectId="df68a794-2655-4492-b246-2cf0e2715fba"
        username={user.username}
        secret={user.secret}
        sytle={{ height: '100%' }}
      />
    </div>
  );
};

export default ChatsPage;
