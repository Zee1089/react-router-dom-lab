// src/App.jsx
import { useState } from 'react';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import MailboxList from './components/MailboxList';
import MailboxForm from './components/MailboxForm';
import MailboxDetails from './components/MailboxDetails';
import './App.css'


const App = () => {
  const [mailbox, setMailbox] = useState([]);
  const addMailbox = (newMailboxData) => {
    newMailboxData._id = mailbox.length + 1;
    setMailbox([...mailbox, newMailboxData]);
    console.log(newMailboxData);
  };
  
  return (
    <>
      <h1>Hello MAILBOXES!</h1>
      <NavBar />
      <Routes>
          <Route path="/" element={<h2>Home Page</h2>} />
          <Route path="/mailboxes" element={<MailboxList mailbox={mailbox} />} />
          <Route
            path="/mailboxes/:mailboxId"
            element={<MailboxDetails mailbox={mailbox} />}
          />    
          <Route path="/new-mailbox" element={<MailboxForm addMailbox={addMailbox} />} />

      </Routes>

    </>
  );
};

export default App;
