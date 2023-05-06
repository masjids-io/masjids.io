import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "../../../widgets/Accordion";
import "../../../../../styles/editor/settings.css";
import { BorderRadius, Opacity, Border } from "./widgets";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const Style = () => {
  return (
    <div className="global_settings">
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <p>Style</p>
        </AccordionSummary>
        <AccordionDetails>
          <div className="style_container">
            <Opacity />
            <BorderRadius />

            <Border />
            <div className="style_box_shadow"></div>
            <div className="style_background"></div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
