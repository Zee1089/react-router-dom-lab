
import { useParams } from 'react-router-dom';

const MailboxDetails = (props) => {
    const { mailboxId } = useParams();
    const singleMailbox = props.mailbox.find(
        (mailbox) => mailbox._id === Number(mailboxId));
    console.log('Mailbox Object:', singleMailbox)


    const selectedLetters = props.letters.filter(
        (letter) => letter.mailboxId === Number(mailboxId)
      );
  
  
  // src/components/PokemonDetails.jsx
return (
    <>
      <h2>{singleMailbox._id}</h2>
      <dl>
        <dt>Box Size:</dt>
        <dd>{singleMailbox.boxSize}</dd>
        <dt>Box Holder:</dt>
        <dd>{singleMailbox.boxHolder}</dd>
        <dt>Letters:</dt>
        <dd>{selectedLetters._id}</dd>
        <dd>
          <ul>
            {selectedLetters.map((letter, index) => (
              <li key={index}>
                <p>Recipient: {letter.recipient}</p>
                <p>Message: {letter.message}</p>
              </li>
            ))}
          </ul>
        </dd>
      </dl>
    </>
  );
  
  };
  
  export default MailboxDetails;
  