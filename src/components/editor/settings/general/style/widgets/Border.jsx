import { useState } from "react";
import { MenuItem, Select } from "@mui/material";
import { GiCheckMark } from "react-icons/gi";
import { useNode } from "@craftjs/core";
import "../../../../../../styles/editor/settings.css";
export const Border = () => {
  const [unit, setUnit] = useState("px");
  const [width, setWidth] = useState(0);
  const [style, setStyle] = useState("");
  const [color, setColor] = useState("000");
  let borderStyle = `${width}${unit} ${style} ${color}`;
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  let stateBorderStyle = props.border.split(/\s+/)

  return (
    <div className="style_border">
      <div className="title_approve">
        <p className="style_border_radius_label">Border</p>
        <GiCheckMark
        className="approve_style_icon"
          color="#78d67c"
          style={{ cursor: "pointer" }}
          onClick={() => {
            setProp((props) => (props.border = `${borderStyle}`));
          }}
        />
      </div>
      <div className="border_setting_dimensions">
        <div className="block_border_1">
          <p className="label">width</p>
          <div className="global_setting_dimensions__  dimensions__minWidth">
            <input
              className="heigh_input"
              type="number"
              id="topleft"
              placeholder={`${stateBorderStyle[0]}`}
              onChange={(event) => {
                setWidth(event.target.value);
              }}
            />
            <div className="selector_mui">
              <Select
                defaultValue={"px"}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={unit}
                label="unit"
                style={{
                  color: "white",
                  height: "30px",
                  width: "60px",
                }}
                size="20px"
                onChange={(event) => {
                  setUnit(event.target.value);
                  console.log(borderStyle);
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
        <div className="block_border_2">
          <p className="label">style</p>
          <div className="global_setting_dimensions__ dimensions__minWidth">
            <div className="selector_mui">
              <Select
                defaultValue={"none"}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={stateBorderStyle[1]}
                label="unit"
                style={{
                  color: "white",
                  height: "30px",
                  width: "120px",
                }}
                size="20px"
                onChange={(event) => {
                  setStyle(event.target.value);
                  console.log(borderStyle);
                }}
              >
                <MenuItem value={"none"}>none</MenuItem>
                <MenuItem value={"solid"}>solid</MenuItem>
                <MenuItem value={"dotted"}>dotted</MenuItem>
                <MenuItem value={"dashed"}>dashed</MenuItem>
                <MenuItem value={"double"}>double</MenuItem>
                <MenuItem value={"groove"}>groove</MenuItem>
                <MenuItem value={"ridge"}>ridge</MenuItem>
                <MenuItem value={"inset"}>inset</MenuItem>
                <MenuItem value={"outset"}>outset</MenuItem>
              </Select>
            </div>
          </div>
        </div>
        <div className="block_border_3">
          <p className="label">color</p>
          <div className="global_setting_dimensions__ dimensions__color">
            <div className="color_input_wrapper">
              <p className="border_color_meter">{color}</p>
              <input
                className="heigh_input"
                type="color"
                id="color_pallete"
                placeholder={stateBorderStyle[2]}
                onChange={(event) => {
                  console.log(borderStyle);

                  setColor(event.target.value);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
