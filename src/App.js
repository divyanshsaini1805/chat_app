import {ChatEngine, ChatFeed} from 'react-chat-engine';
import './App.css';

function App() {
  return (
    <ChatEngine 
    height = "100vh"
    projectID="a96bf0b5-a1da-4f00-83aa-1c99784d2c1d"
    userName="Divyansh"
    userSecret="123123"
    renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
  />
  );
}



export default App;
