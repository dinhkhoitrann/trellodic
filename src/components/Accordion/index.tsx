import * as React from 'react';
import { styled } from '@mui/material/styles';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AccordionProps, Accordion as MuiAccordion, Typography } from '@/components/UIElements';

const { Summary, Details } = MuiAccordion;

const Accordion = styled((props: AccordionProps) => <MuiAccordion disableGutters elevation={0} square {...props} />)(
  ({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#333643' : '#ebecf0',
  }),
);

export default function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Accordion>
      <Summary expandIcon={<ExpandMoreIcon />}>
        <Typography sx={{ fontWeight: 'bold' }}>{title}</Typography>
      </Summary>
      <Details>{children}</Details>
    </Accordion>
  );
}
