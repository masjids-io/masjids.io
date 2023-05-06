import React from "react";
import {
  Button as MaterialButton,
  MenuItem,
  Select, 
} from "@mui/material";
import { useNode } from "@craftjs/core";
import "../../../../../../styles/editor/settings.css";

export const Padding =()=> {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  const [pTop, setpTop] = React.useState("");
  const [pBottom, setpBottom] = React.useState("");
  const [pLeft, setpLeft] = React.useState("");
  const [pRight, setpRight] = React.useState("");

  return (
    <div className="padding_settings">
      <p className="margin_label">Padding</p>
      <div className="margin_settings_group">
        <div>
          <p className="label">top</p>
          <div className="global_setting_dimensions__  ">
            <input
              className="heigh_input"
              type="number"
              id="paddingtop"
              placeholder={props.paddingTop}
              onChange={(e) => {
                setProp(
                  (props) => (props.paddingTop = `${e.target.value}${pTop}`)
                );
              }}
            />
            <div className="selector_mui">
              <Select
                defaultValue={"px"}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={pTop}
                label="unit"
                style={{
                  color: "white",
                  height: "30px",
                  width: "60px",
                }}
                size="20px"
                onChange={(event) => {
                  setpTop(event.target.value);
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
          <p className="label">bottom</p>
          <div className="global_setting_dimensions__ dimensions__minWidth">
            <input
              className="heigh_input"
              type="number"
              id="paddingBottom"
              placeholder={props.paddingBottom}
              onChange={(e) => {
                setProp(
                  (props) =>
                    (props.paddingBottom = `${e.target.value}${pBottom}`)
                );
              }}
            />
            <div className="selector_mui">
              <Select
                defaultValue={"px"}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={pBottom}
                label="unit"
                style={{
                  color: "white",
                  height: "30px",
                  width: "60px",
                }}
                size="20px"
                onChange={(event) => {
                  setpBottom(event.target.value);
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
          <p className="label">right</p>
          <div className="global_setting_dimensions__ dimensions__minWidth">
            <input
              className="heigh_input"
              type="number"
              id="paddingRight"
              placeholder={props.paddingRight}
              onChange={(e) => {
                setProp(
                  (props) => (props.paddingRight = `${e.target.value}${pRight}`)
                );
              }}
            />
            <div className="selector_mui">
              <Select
                defaultValue={"px"}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={pRight}
                label="unit"
                style={{
                  color: "white",
                  height: "30px",
                  width: "60px",
                }}
                size="20px"
                onChange={(event) => {
                  setpRight(event.target.value);
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
          <p className="label">left</p>
          <div className="global_setting_dimensions__ dimensions__minWidth">
            <input
              className="heigh_input"
              type="number"
              id="paddingLeft"
              placeholder={props.paddingLeft}
              onChange={(e) => {
                setProp(
                  (props) => (props.paddingLeft = `${e.target.value}${pLeft}`)
                );
              }}
            />
            <div className="selector_mui">
              <Select
                defaultValue={"px"}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={pLeft}
                label="unit"
                style={{
                  color: "white",
                  height: "30px",
                  width: "60px",
                }}
                size="20px"
                onChange={(event) => {
                  setpLeft(event.target.value);
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
}

export default Padding;
