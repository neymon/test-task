import React from 'react';
import { Chat } from './components/Chat';
import { UserNameForm } from './components/UserNameForm';

function App() {
  return (
    <main>
      <aside>
        <UserNameForm />
      </aside>
      <section>
        <Chat />
      </section>
    </main>
  );
}

export default App;
