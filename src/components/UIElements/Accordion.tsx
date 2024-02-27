import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

function Accordion(props: AccordionProps) {
  return <MuiAccordion {...props} />;
}

Accordion.Summary = AccordionSummary;
Accordion.Details = AccordionDetails;

export default Accordion;
export type { AccordionProps };
