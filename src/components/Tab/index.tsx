import { HTMLAttributes, createContext, useContext, useState } from 'react';
import MUITabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { a11yProps } from './service';

const TabContext = createContext({
  value: 0,
  onChange: (_event: React.SyntheticEvent, _newValue: number) => {},
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
        <Tab key={index} label={item} {...a11yProps(index)} />
      ))}
    </MUITabs>
  );
}

function TabPanel(props: { children: React.ReactNode; index: number } & HTMLAttributes<HTMLDivElement>) {
  const { children, index, ...other } = props;
  const { value } = useContext(TabContext);

  return (
    <div role="tabpanel" hidden={value !== index} id={`tabpanel-${index}`} aria-labelledby={`tab-${index}`} {...other}>
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

Tabs.Header = TabHeader;
Tabs.Panel = TabPanel;

export default Tabs;
