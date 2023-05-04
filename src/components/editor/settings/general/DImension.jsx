import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "../../widgets/Accordion";
import "../../../../styles/editor/settings.css";
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

export const Dimension = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));
  const [unit, setUnit] = React.useState("");

  const handleChange = (event) => {
    setUnit(event.target.value);
  };

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
            <p>Size</p>
            <div className="global_setting_dimensions">
              <div className="global_setting_dimensions__ dimensions__height">
                <input placeholder="height" className="heigh_input" type="number" />
                <div className="selector_mui">
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={unit}
                    label="unit"
                    style={{ color: "white", height: "30px", width: "60px" }}
                    size="20px"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>px</MenuItem>
                    <MenuItem value={20}>%</MenuItem>
                    <MenuItem value={30}>em</MenuItem>
                    <MenuItem value={40}>rem</MenuItem>
                    <MenuItem value={50}>vh</MenuItem>
                    <MenuItem value={60}>vw</MenuItem>
                  </Select>
                </div>
              </div>
              <div className="global_setting_dimensions__ dimensions__width">
                <input
                  className="heigh_input"
                  type="number"
                  id="width"
                  onChange={(e) =>
                    setProp((props) => (props.width = `${e.target.value}px`))
                  }
                />
                <div className="selector_mui">
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={unit}
                    label="unit"
                    style={{ color: "white", height: "30px", width: "60px" }}
                    size="20px"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>px</MenuItem>
                    <MenuItem value={20}>%</MenuItem>
                    <MenuItem value={30}>em</MenuItem>
                    <MenuItem value={40}>rem</MenuItem>
                    <MenuItem value={50}>vh</MenuItem>
                    <MenuItem value={60}>vw</MenuItem>
                  </Select>
                </div>
              </div>
              <div className="global_setting_dimensions__ dimensions__minheight">
                <input className="heigh_input" type="number" id="minheight" />
                <div className="selector_mui">
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={unit}
                    label="unit"
                    style={{ color: "white", height: "30px", width: "60px" }}
                    size="20px"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>px</MenuItem>
                    <MenuItem value={20}>%</MenuItem>
                    <MenuItem value={30}>em</MenuItem>
                    <MenuItem value={40}>rem</MenuItem>
                    <MenuItem value={50}>vh</MenuItem>
                    <MenuItem value={60}>vw</MenuItem>
                  </Select>
                </div>
              </div>
              <div className="global_setting_dimensions__ dimensions__maxwidth">
                <input className="heigh_input" type="number" id="maxwidth" />
                <div className="selector_mui">
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={unit}
                    label="unit"
                    style={{ color: "white", height: "30px", width: "60px" }}
                    size="20px"
                    onChange={handleChange}
                  >
                    <MenuItem value={10}>px</MenuItem>
                    <MenuItem value={20}>%</MenuItem>
                    <MenuItem value={30}>em</MenuItem>
                    <MenuItem value={40}>rem</MenuItem>
                    <MenuItem value={50}>vh</MenuItem>
                    <MenuItem value={60}>vw</MenuItem>
                  </Select>
                </div>
              </div>
            </div>
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
