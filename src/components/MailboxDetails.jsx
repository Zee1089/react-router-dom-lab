
import { useParams } from 'react-router-dom';

const MailboxDetails = (props) => {
    const { mailboxId } = useParams();
    const singleMailbox = props.mailbox.find(
        (mailbox) => mailbox._id === Number(mailboxId));
    console.log('Mailbox Object:', singleMailbox)
  
  
  // src/components/PokemonDetails.jsx
return (
    <>
      <h2>{singleMailbox._id}</h2>
      <dl>
        <dt>Box Size:</dt>
        <dd>{singleMailbox.boxSize}</dd>
        <dt>Box Holder:</dt>
        <dd>{singleMailbox.boxHolder}</dd>
      </dl>
    </>
  );
  
  };
  
  export default MailboxDetails;
  