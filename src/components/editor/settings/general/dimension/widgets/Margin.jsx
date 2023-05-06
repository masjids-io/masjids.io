import React from 'react'
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

export const Margin = ()=>  {
    const {
        actions: { setProp },
        props,
      } = useNode((node) => ({
        props: node.data.props,
      }));
    

  const [mTop, setmTop] = React.useState("");
  const [mBottom, setmBottom] = React.useState("");
  const [mLeft, setmLeft] = React.useState("");
  const [mRight, setmRight] = React.useState("");

  return (
<div className="margin_settings">
              <p className="margin_label">Margin</p>
              <div className="margin_settings_group">
                <div>
                  <p className="label">top</p>
                  <div className="global_setting_dimensions__  ">
                    <input
                      className="heigh_input"
                      type="number"
                      id="marginTop"
                      placeholder={props.marginTop}
                      onChange={(e) => {
                        setProp(
                          (props) =>
                            (props.marginTop = `${e.target.value}${mTop}`)
                        );
                      }}
                    />
                    <div className="selector_mui">
                      <Select
                        defaultValue={"px"}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={mTop}
                        label="unit"
                        style={{
                          color: "white",
                          height: "30px",
                          width: "60px",
                        }}
                        size="20px"
                        onChange={(event) => {
                          setmTop(event.target.value);
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
                      id="marginBottom"
                      placeholder={props.marginBottom}
                      onChange={(e) => {
                        setProp(
                          (props) =>
                            (props.marginBottom = `${e.target.value}${mBottom}`)
                        );
                      }}
                    />
                    <div className="selector_mui">
                      <Select
                        defaultValue={"px"}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={mBottom}
                        label="unit"
                        style={{
                          color: "white",
                          height: "30px",
                          width: "60px",
                        }}
                        size="20px"
                        onChange={(event) => {
                          setmBottom(event.target.value);
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
                      id="marginRight"
                      placeholder={props.marginRight}
                      onChange={(e) => {
                        setProp(
                          (props) =>
                            (props.marginRight = `${e.target.value}${mRight}`)
                        );
                      }}
                    />
                    <div className="selector_mui">
                      <Select
                        defaultValue={"px"}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={mRight}
                        label="unit"
                        style={{
                          color: "white",
                          height: "30px",
                          width: "60px",
                        }}
                        size="20px"
                        onChange={(event) => {
                          setmRight(event.target.value);
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
                      id="marginLeft"
                      placeholder={props.marginLeft}
                      onChange={(e) => {
                        setProp(
                          (props) =>
                            (props.marginLeft = `${e.target.value}${mLeft}`)
                        );
                      }}
                    />
                    <div className="selector_mui">
                      <Select
                        defaultValue={"px"}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={mLeft}
                        label="unit"
                        style={{
                          color: "white",
                          height: "30px",
                          width: "60px",
                        }}
                        size="20px"
                        onChange={(event) => {
                          setmLeft(event.target.value);
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
  )
}

export default Margin