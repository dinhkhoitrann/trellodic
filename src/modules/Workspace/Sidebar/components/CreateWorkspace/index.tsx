import CreateWorkspaceModalView from './view';

type CreateWorkspaceModalProps = {
  isShowCreateModal: boolean;
  onClose: () => void;
};

function CreateWorkspaceModal(props: CreateWorkspaceModalProps) {
  return <CreateWorkspaceModalView {...props} />;
}

export default CreateWorkspaceModal;
