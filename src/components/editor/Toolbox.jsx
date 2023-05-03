import React from "react";
import { Box, Typography, Grid, Button as MaterialButton } from "@mui/material";
import "../../styles/editor/toolbox.css";

import { Container } from "../user/Container";
import { Card } from "../user/Card";
import { Button } from "../user/Button";
import { Text } from "../user/Text";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { Element, useEditor } from "@craftjs/core";
import Basic from "./toolbox/Basic";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';





const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderBottom: `1px solid ${theme.palette.divider}`,
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
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

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  borderTop: 'rgb(36, 62, 49)',
  backgroundColor:  'rgb(36, 62, 49)'

}));







export const Toolbox = () => {

  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const { connectors, editorEnabled } = useEditor((state) => {
    return {
      editorEnabled: state.options.enabled,
    };
  });

  if (!editorEnabled) {
    return null;
  }

  return (
    <div className="toolbox_container">
      <div className="toolbox_item_container"></div>

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Basic</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Basic />
        </AccordionDetails>
      </Accordion>
      
    </div>
  );
};
