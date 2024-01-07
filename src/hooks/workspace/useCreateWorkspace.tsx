import { useState } from 'react';
import CreateWorkspaceModal from '@/components/_shared/Workspace/components/CreateForm';

export default function useCreateWorkspace() {
  const [showCreateModal, setShowCreateModal] = useState(false);

  const handleShowCreateModal = () => {
    setShowCreateModal((prevState) => !prevState);
  };

  const renderModal = () => {
    return <CreateWorkspaceModal isShowCreateModal={showCreateModal} onClose={handleShowCreateModal} />;
  };

  return { renderCreateWorkspaceModal: renderModal, handleShowCreateModal };
}
