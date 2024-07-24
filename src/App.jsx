// src/App.jsx
import { useState } from 'react';
import NavBar from './components/NavBar';
import { Route, Routes } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import MailboxList from './components/MailboxList';
import MailboxForm from './components/MailboxForm';
import MailboxDetails from './components/MailboxDetails';
import './App.css'
import LetterForm from './components/LetterForm';
import { useNavigate } from 'react-router-dom';

const App = () => {
  const [mailbox, setMailbox] = useState([]);
  const [letters, setLetters] = useState([]);
  const navigate = useNavigate();

  const addMailbox = (newMailboxData) => {
    newMailboxData._id = mailbox.length + 1;
    setMailbox([...mailbox, newMailboxData]);
    console.log(newMailboxData);
  };

  const addLetter = (newLetterData) => {
    newLetterData._id = letters.length +1;
    setLetters([...letters, newLetterData]);

  }
  
  
  return (
    <>
      <h1>Hello MAILBOXES!</h1>
      <NavBar />
      <Routes>
          <Route path="/" element={<h2>Home Page</h2>} />
          <Route path="/mailbox" element={<MailboxList mailbox={mailbox} />} />
          <Route
            path="/mailbox/:mailboxId"
            element={<MailboxDetails mailbox={mailbox} letters={letters} />}
          />    
          <Route path="/new-mailbox" element={<MailboxForm addMailbox={addMailbox} />} />
          <Route path="/new-letter" element={<LetterForm mailbox={mailbox} addLetter={addLetter} />} />

      </Routes>

    </>
  );
};

export default App;
