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
          <div className="global_setting_details">
            <p>Size</p>{" "}
            <RadioGroup
              defaultValue={props.size}
              onChange={(e) =>
                setProp((props) => (props.size = e.target.value))
              }
            >
              <FormControlLabel
                label="Small"
                value="small"
                control={<Radio size="small" color="primary" />}
              />
              <FormControlLabel
                label="Medium"
                value="medium"
                control={<Radio size="small" color="primary" />}
              />
              <FormControlLabel
                label="Large"
                value="large"
                control={<Radio size="small" color="primary" />}
              />
            </RadioGroup>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
