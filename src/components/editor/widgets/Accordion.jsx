
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";




export const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
  '&:before': {
    display: 'none',
  },
}));

export const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{color: 'rgb(36, 62, 49)', fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  color: 'white',
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgb(36, 62, 49)'
      : 'rgb(36, 62, 49)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    color: 'white',
    transform: 'rotate(0deg)',
  },
  '& .MuiAccordionSummary-expandIconWrapper':{
    color: 'white',
    transform: 'rotate(-90deg)',
  }
}));

export const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  borderTop: 'rgb(36, 62, 49)',
  backgroundColor:  'rgb(36, 62, 49)'

}));
