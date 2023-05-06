import React from "react";
import { MenuItem, Select } from "@mui/material";
import { useNode } from "@craftjs/core";
import "../../../../../../styles/editor/settings.css";
export const BorderRadius = () => {
  const [topLeftUnit, setTopLeftUnit] = React.useState("");
  const [topRightUnit, setTopRightUnit] = React.useState("");
  const [bottomLeftUnit, setBottomLeftUnit] = React.useState("");
  const [bottomRightUnit, setBottomRightUnit] = React.useState("");
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <div className="style_border_radius">
      <p className="style_border_radius_label">Border radius</p>
      <div className="style_border_radius_settings_group">
        <div>
          <p className="label">top left</p>
          <div className="global_setting_dimensions__  dimensions__minWidth">
            <input
              className="heigh_input"
              type="number"
              id="topleft"
              placeholder={props.borderTopLeftRadius}
              onChange={(event) => {
                setProp(
                  (props) =>
                    (props.borderTopLeftRadius = `${event.target.value}${topLeftUnit}`)
                );
              }}
            />
            <div className="selector_mui">
              <Select
                defaultValue={"px"}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={topLeftUnit}
                label="unit"
                style={{
                  color: "white",
                  height: "30px",
                  width: "60px",
                }}
                size="20px"
                onChange={(event) => {
                  setTopLeftUnit(event.target.value);
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
          <p className="label">top right</p>
          <div className="global_setting_dimensions__ dimensions__minWidth">
            <input
              className="heigh_input"
              type="number"
              id="toprightbr"
              placeholder={props.borderTopRightRadius}
              onChange={(event) => {
                setProp(
                  (props) =>
                    (props.borderTopRightRadius = `${event.target.value}${topRightUnit}`)
                );
              }}
            />
            <div className="selector_mui">
              <Select
                defaultValue={"px"}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={topRightUnit}
                label="unit"
                style={{
                  color: "white",
                  height: "30px",
                  width: "60px",
                }}
                size="20px"
                onChange={(event) => {
                  setTopRightUnit(event.target.value);
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
          <p className="label">bottom left</p>
          <div className="global_setting_dimensions__ dimensions__minWidth">
            <input
              className="heigh_input"
              type="number"
              id="bottmleft"
              placeholder={props.borderBottomLeftRadius}
              onChange={(event) => {
                setProp(
                  (props) =>
                    (props.borderBottomLeftRadius = `${event.target.value}${bottomLeftUnit}`)
                );
              }}
            />
            <div className="selector_mui">
              <Select
                defaultValue={"px"}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={bottomLeftUnit}
                label="unit"
                style={{
                  color: "white",
                  height: "30px",
                  width: "60px",
                }}
                size="20px"
                onChange={(event) => {
                  setBottomLeftUnit(event.target.value);
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
          <p className="label">bottom right</p>
          <div className="global_setting_dimensions__ dimensions__minWidth">
            <input
              className="heigh_input"
              type="number"
              id="bottomrightbr"
              placeholder={props.borderBottomRightRadius}
              onChange={(event) => {
                setProp(
                  (props) =>
                    (props.borderBottomRightRadius = `${event.target.value}${bottomRightUnit}`)
                );
              }}
            />
            <div className="selector_mui">
              <Select
                defaultValue={"px"}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={bottomRightUnit}
                label="unit"
                style={{
                  color: "white",
                  height: "30px",
                  width: "60px",
                }}
                size="20px"
                onChange={(event) => {
                  setBottomRightUnit(event.target.value);
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
    </div>
  );
};

export default BorderRadius;
