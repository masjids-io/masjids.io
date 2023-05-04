import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "../../widgets/Accordion";
import "../../../../styles/editor/settings.css";
import {
  Button as MaterialButton,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@mui/material";
import { useNode } from "@craftjs/core";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const GlobalSettings = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));
  return (
    <div className="global_settings">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <p>Global</p>
        </AccordionSummary>
        <AccordionDetails>
          <p>example</p>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
