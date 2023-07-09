import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

// import FriendList from './components/FriendList/FriendList​';
// import friends from './components/FriendList/friends.json'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <FriendList friends={friends}/> */}
  </React.StrictMode>
);
