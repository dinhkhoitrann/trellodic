import { HTMLAttributes, createContext, useContext, useState } from 'react';
import { Tabs as MUITabs, Tab, Box, TabsProps } from '@/components/UIElements';

const TabContext = createContext<{ value: number; onChange: TabsProps['onChange'] }>({
  value: 0,
  onChange: () => {},
});

function Tabs({ children }: { children: React.ReactNode }) {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return <TabContext.Provider value={{ value, onChange: handleChange }}>{children}</TabContext.Provider>;
}

function TabHeader({ items }: { items: string[] }) {
  const { value, onChange } = useContext(TabContext);

  return (
    <MUITabs value={value} onChange={onChange}>
      {items.map((item, index) => (
        <Tab key={index} label={item} />
      ))}
    </MUITabs>
  );
}

function TabPanel(props: { index: number } & HTMLAttributes<HTMLDivElement>) {
  const { children, index, ...other } = props;
  const { value } = useContext(TabContext);

  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

Tabs.Header = TabHeader;
Tabs.Panel = TabPanel;

export default Tabs;
