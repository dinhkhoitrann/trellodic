import { useState } from 'react';

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

type DrawerComponent = (_props: DrawerProps) => React.ReactElement;

function useDrawer(Drawer: DrawerComponent) {
  const [isOpen, setIsOpen] = useState(false);

  const handleDrawerVisibility = () => {
    setIsOpen(!isOpen);
  };

  const render = (props?: { [key: string]: any }) => {
    return <Drawer isOpen={isOpen} onClose={handleDrawerVisibility} {...props} />;
  };

  return {
    onOpen: handleDrawerVisibility,
    render,
  };
}

export default useDrawer;
