import React from "react";
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
import "../../../../../../styles/editor/settings.css";

export const Size = ()=> {
  const [heightUnit, setHeightUnit] = React.useState("");
  const [widthUnit, setWidthUnit] = React.useState("");
  const [minHeightUnit, setMinHeightUnit] = React.useState("");
  const [maxWidthUnit, setMaxWidthUnit] = React.useState("");
  const [minWidthUnit, setMinWidthUnit] = React.useState("");
  const [maxHeightUnit, setMaxHeightUnit] = React.useState("");

  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <div className="global_setting_dimensions">
      <div>
        <p className="label">Height</p>
        <div className="global_setting_dimensions__ dimensions__height">
          <input
            placeholder={props.height}
            className="heigh_input"
            type="number"
            onChange={(e) => {
              setProp(
                (props) => (props.height = `${e.target.value}${heightUnit}`)
              );
            }}
          />
          <div className="selector_mui">
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={heightUnit}
              label="unit"
              style={{ color: "white", height: "30px", width: "60px" }}
              size="20px"
              onChange={(event) => {
                setHeightUnit(event.target.value);
              }}
            >
              <MenuItem value={"px"}>px</MenuItem>
              <MenuItem value={"%"}>%</MenuItem>
              <MenuItem value={"em"}>em</MenuItem>
              <MenuItem value={"rem"}>rem</MenuItem>
              <MenuItem value={"vh"}>vh</MenuItem>
              <MenuItem value={"vw"}>vw</MenuItem>
            </Select>
          </div>
        </div>
      </div>
      <div>
        <p className="label">Width</p>
        <div className="global_setting_dimensions__ dimensions__width">
          <input
            placeholder={props.width}
            className="heigh_input"
            type="number"
            id="width"
            onChange={(e) => {
              setProp(
                (props) => (props.width = `${e.target.value}${widthUnit}`)
              );
            }}
          />
          <div className="selector_mui">
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={widthUnit}
              label="unit"
              style={{ color: "white", height: "30px", width: "60px" }}
              size="20px"
              onChange={(event) => {
                setWidthUnit(event.target.value);
              }}
            >
              <MenuItem value={"px"}>px</MenuItem>
              <MenuItem value={"%"}>%</MenuItem>
              <MenuItem value={"em"}>em</MenuItem>
              <MenuItem value={"rem"}>rem</MenuItem>
              <MenuItem value={"vh"}>vh</MenuItem>
              <MenuItem value={"vw"}>vw</MenuItem>
            </Select>
          </div>
        </div>
      </div>
      <div>
        <p className="label">min height</p>
        <div className="global_setting_dimensions__ dimensions__minheight">
          <input
            className="heigh_input"
            type="number"
            id="minheight"
            placeholder={props.minHeight}
            onChange={(e) => {
              setProp(
                (props) =>
                  (props.minHeight = `${e.target.value}${minHeightUnit}`)
              );
            }}
          />
          <div className="selector_mui">
            <Select
              defaultValue={"px"}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={minHeightUnit}
              label="unit"
              style={{ color: "white", height: "30px", width: "60px" }}
              size="20px"
              onChange={(event) => {
                setMinHeightUnit(event.target.value);
              }}
            >
              <MenuItem value={"px"}>px</MenuItem>
              <MenuItem value={"%"}>%</MenuItem>
              <MenuItem value={"em"}>em</MenuItem>
              <MenuItem value={"rem"}>rem</MenuItem>
              <MenuItem value={"vh"}>vh</MenuItem>
              <MenuItem value={"vw"}>vw</MenuItem>
            </Select>
          </div>
        </div>
      </div>
      <div>
        <p className="label">max width</p>
        <div className="global_setting_dimensions__ dimensions__maxwidth">
          <input
            className="heigh_input"
            type="number"
            id="maxwidth"
            placeholder={props.maxWidth}
            onChange={(e) => {
              setProp(
                (props) => (props.maxWidth = `${e.target.value}${maxWidthUnit}`)
              );
            }}
          />
          <div className="selector_mui">
            <Select
              defaultValue={"px"}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={maxWidthUnit}
              label="unit"
              style={{ color: "white", height: "30px", width: "60px" }}
              size="20px"
              onChange={(event) => {
                setMaxWidthUnit(event.target.value);
              }}
            >
              <MenuItem value={"px"}>px</MenuItem>
              <MenuItem value={"%"}>%</MenuItem>
              <MenuItem value={"em"}>em</MenuItem>
              <MenuItem value={"rem"}>rem</MenuItem>
              <MenuItem value={"vh"}>vh</MenuItem>
              <MenuItem value={"vw"}>vw</MenuItem>
            </Select>
          </div>
        </div>
      </div>
      <div>
        <p className="label">max height</p>
        <div className="global_setting_dimensions__ dimensions__maxHeight">
          <input
            className="heigh_input"
            type="number"
            id="maxhright"
            placeholder={props.mawHeight}
            onChange={(e) => {
              setProp(
                (props) =>
                  (props.maxHeight = `${e.target.value}${maxHeightUnit}`)
              );
            }}
          />
          <div className="selector_mui">
            <Select
              defaultValue={"px"}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={maxHeightUnit}
              label="unit"
              style={{ color: "white", height: "30px", width: "60px" }}
              size="20px"
              onChange={(event) => {
                setMaxHeightUnit(event.target.value);
              }}
            >
              <MenuItem value={"px"}>px</MenuItem>
              <MenuItem value={"%"}>%</MenuItem>
              <MenuItem value={"em"}>em</MenuItem>
              <MenuItem value={"rem"}>rem</MenuItem>
              <MenuItem value={"vh"}>vh</MenuItem>
              <MenuItem value={"vw"}>vw</MenuItem>
            </Select>
          </div>
        </div>
      </div>
      <div>
        <p className="label">min width</p>
        <div className="global_setting_dimensions__ dimensions__minWidth">
          <input
            className="heigh_input"
            type="number"
            id="minwidth"
            placeholder={props.minWidth}
            onChange={(e) => {
              setProp(
                (props) => (props.minWidth = `${e.target.value}${minWidthUnit}`)
              );
            }}
          />
          <div className="selector_mui">
            <Select
              defaultValue={"px"}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={minWidthUnit}
              label="unit"
              style={{ color: "white", height: "30px", width: "60px" }}
              size="20px"
              onChange={(event) => {
                setMinWidthUnit(event.target.value);
              }}
            >
              <MenuItem value={"px"}>px</MenuItem>
              <MenuItem value={"%"}>%</MenuItem>
              <MenuItem value={"em"}>em</MenuItem>
              <MenuItem value={"rem"}>rem</MenuItem>
              <MenuItem value={"vh"}>vh</MenuItem>
              <MenuItem value={"vw"}>vw</MenuItem>
            </Select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Size;
