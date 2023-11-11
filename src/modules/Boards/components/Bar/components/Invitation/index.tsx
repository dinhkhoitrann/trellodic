import InvitationView from './view';

type InvitationProps = {
  onClose: () => void;
};

function Invitation(props: InvitationProps) {
  return <InvitationView {...props} />;
}

export default Invitation;
