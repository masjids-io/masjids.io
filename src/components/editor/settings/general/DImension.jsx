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
  const [heightUnit, setHeightUnit] = React.useState("");
  const [widthUnit, setWidthUnit] = React.useState("");
  const [minHeightUnit, setMinHeightUnit] = React.useState("");
  const [maxWidthUnit, setMaxWidthUnit] = React.useState("");
  const [minWidthUnit, setMinWidthUnit] = React.useState("");
  const [maxHeightUnit, setMaxHeightUnit] = React.useState("");

  const [mTop, setmTop] = React.useState("");
  const [mBottom, setmBottom] = React.useState("");
  const [mLeft, setmLeft] = React.useState("");
  const [mRight, setmRight] = React.useState("");

  const [pTop, setpTop] = React.useState("");
  const [pBottom, setpBottom] = React.useState("");
  const [pLeft, setpLeft] = React.useState("");
  const [pRight, setpRight] = React.useState("");

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
                        (props) =>
                          (props.height = `${e.target.value}${heightUnit}`)
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
                        (props) =>
                          (props.width = `${e.target.value}${widthUnit}`)
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
                        (props) =>
                          (props.maxWidth = `${e.target.value}${maxWidthUnit}`)
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
                        (props) =>
                          (props.minWidth = `${e.target.value}${minWidthUnit}`)
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

            {/* MARGIN */}
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

            {/* PADDING */}

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
                          (props) =>
                            (props.paddingTop = `${e.target.value}${pTop}`)
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
                          (props) =>
                            (props.paddingRight = `${e.target.value}${pRight}`)
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
                          (props) =>
                            (props.paddingLeft = `${e.target.value}${pLeft}`)
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
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
