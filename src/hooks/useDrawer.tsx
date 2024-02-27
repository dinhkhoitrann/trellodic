import { useState } from 'react';
import { DrawerProps as DrawerPropsMUI } from '@/components/UIElements';

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
};

type DrawerComponent = React.ComponentType<DrawerProps>;

function useDrawer(Drawer: DrawerComponent, props?: DrawerPropsMUI) {
  const [isOpen, setIsOpen] = useState(false);

  const handleDrawerVisibility = () => {
    setIsOpen(!isOpen);
  };

  const render = () => {
    return <Drawer {...props} isOpen={isOpen} onClose={handleDrawerVisibility} />;
  };

  return {
    onOpen: handleDrawerVisibility,
    render,
  };
}

export default useDrawer;
