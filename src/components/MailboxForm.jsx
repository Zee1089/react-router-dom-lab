import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const initialState = {
  mailboxId: 0,
  boxSize: '',
  boxHolder: '',
};

const MailboxForm = (props) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Form submitted:", formData); // Debugging log
    props.addMailbox(formData);
    setFormData(initialState);
    navigate('/mailbox');
};

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
  };


  return (
    <main>
      <h2>New Mailbox</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="boxSize">Box Size:</label>
        <input
          type="text"
          id="boxSize"
          name="boxSize"
          value={formData.boxSize}
          onChange={handleChange}
        />
        <label htmlFor="boxHolder">Box Holder:</label>
        <input
          type="text"
          id="boxHolder"
          name="boxHolder"
          value={formData.boxHolder}
          onChange={handleChange}
        />
        
        <button type="submit">Submit</button>
      </form>
    </main>
  );
};

export default MailboxForm;