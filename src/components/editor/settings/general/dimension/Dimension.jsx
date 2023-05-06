import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "../../../widgets/Accordion";
import "../../../../../styles/editor/settings.css";
import {
  Button as MaterialButton,
  InputLabel,
  MenuItem,
  Select,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@mui/material";
import { useNode } from "@craftjs/core";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Margin, Size, Padding } from "./widgets/index";

export const Dimension = () => {
  return (
    <div className="global_settings">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <p>Dimesnion</p>
        </AccordionSummary>
        <AccordionDetails>
          <div className="global_setting_details">
            <Size />
            <Margin />
            <Padding />
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
