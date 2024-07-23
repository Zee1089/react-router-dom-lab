import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const initialState = {
  recipient: '',
  message: '',
};


const LetterForm = (props) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState(initialState);
    const [letters, setLetters] = useState([]);
  
  
const addLetter = (e) => {
    e.preventDefault();
    props.addLetter(formData);
    setFormData(initialState);
    navigate('/new-letter')
  }
  
    const handleChange = ({ target }) => {
      setFormData({ ...formData, [target.name]: target.value });
    };
  
  
    return (
      <main>
        <h2>New Letter</h2>
        <form onSubmit={addLetter}>
          <label htmlFor="recipient">Recipient:</label>
          <input
            type="text"
            id="recipient"
            name="recipient"
            value={formData.recipient}
            onChange={handleChange}
          />
          <label htmlFor="messsage">Message:</label>
          <input
            type="text"
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
            <label htmlFor="mailboxId">Mailbox:</label>
            <input
              type="text"
              id="mailboxId"
              name="mailboxId"
              value={formData.mailboxId}
           />
          <button type="submit">Submit</button>
        </form>
      </main>
    );
  };
  



export default LetterForm;