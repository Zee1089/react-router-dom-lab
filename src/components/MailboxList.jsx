import { Link } from 'react-router-dom';

const MailboxList = (props) => {
    return (
      <>
        <h2>Mailbox</h2>
        <ul>
          {props.mailbox.map((currentMailbox) => (
            <li className='mail-box' key={currentMailbox._id}>
                 <Link to={`/mailbox/${currentMailbox._id}`}>
                {currentMailbox._id}
                </Link>
            </li>
          ))}
        </ul>
      </>
    );
  };
  
  export default MailboxList;