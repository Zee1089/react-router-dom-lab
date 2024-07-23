import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const initialState = {
  recipient: '',
  message: '',
};


const LetterForm = ({ mailbox, addLetter}) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState(initialState);
    const [letters, setLetters] = useState([]);
  
  
const handleSubmit = (e) => {
    e.preventDefault();
    addLetter(formData);
    setFormData(initialState);
    navigate(`/mailbox/${currentMailbox._id}`)
    
  }
  
    const handleChange = ({ target }) => {
      setFormData({ ...formData, [target.name]: target.value });
    };
  
  
    return (
      <main>
        <h2>New Letter</h2>
        <form onSubmit={handleSubmit}>
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
            <select
    
              id="mailboxId"
              name="mailboxId"
              value={formData.mailboxId}
              >

{/* //got help from internet  */}
                <option value= "" disabled >{mailbox.length}</option>
                {mailbox.map((mailbox) => (
                    <option key={mailbox._id} value={mailbox._id}>
                        {mailbox._id}
                    </option>
//got help from internet. 
                ))}
           </select>
          <button type="submit">Submit</button>
        </form>
      </main>
    );
  };
  



export default LetterForm;