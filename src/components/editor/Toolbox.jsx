import React from "react";
import { Box, Typography, Grid, Button as MaterialButton } from "@mui/material";
import "../../styles/editor/toolbox.css";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { Container } from "../user/Container";
import { Card } from "../user/Card";
import { Button } from "../user/Button";
import { Text } from "../user/Text";

import { Element, useEditor } from "@craftjs/core";
import Basic from "./toolbox/Basic";
import { Accordion, AccordionDetails, AccordionSummary } from "./widgets/Accordion";






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
