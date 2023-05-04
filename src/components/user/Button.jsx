import React from "react";
import {
  Button as MaterialButton,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@mui/material";

import { useNode } from "@craftjs/core";
import { ButtonSettings } from "../editor/settings/Button/ButtonSettings";

export const Button = ({
  height,
  width,
  textAlign,
  margin,
  padding,
  border,
  borderRadius,
  paddingTop,
  paddingBottom,
  paddingRight,
  paddingLeft,
  marginTop,
  minHeight,
  maxWidth,
  marginBottom,
  marginRight,
  marginLeft,
  color,
  backgroundColor,

  text,
}) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <button
      ref={(ref) => connect(drag(ref))}
      style={{
        textAlign: textAlign,
        height: height,
        minHeight: minHeight,
        maxWidth: maxWidth,
        width: width,
        margin: margin,
        marginTop: marginTop,
        marginBottom: marginBottom,
        marginLeft: marginLeft,
        marginRight: marginRight,
        padding: padding,
        backgroundColor: backgroundColor,
        border: border,
        borderRadius: borderRadius,
        paddingTop: paddingTop,
        paddingBottom: paddingBottom,
        paddingRight: paddingRight,
        paddingLeft: paddingLeft,
      }}
    >
      <p style={{ color: color }}>{text}</p>)
    </button>
  );
};
// {children ?? <p style={{color: color}}>{text}</p>}
Button.craft = {
  props: {
    height: "50px",
    width: "100px",
    margin: "",
    border: "1px solid black",
    textAlign: "center",
    padding: "",
    paddingTop: "16px",
    paddingBottom: "",
    paddingRight: "",
    paddingLeft: "",
    marginTop: "",
    marginBottom: "",
    marginRight: "",
    marginLeft: "",
    color: "white",
    backgroundColor: "black",
    text: "Click me",
  },
  related: {
    settings: ButtonSettings,
  },
};
