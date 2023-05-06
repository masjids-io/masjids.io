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
  minHeight,
  maxHeight,
  maxWidth,
  minWidth,
  borderTopLeftRadius,
  borderTopRightRadius,
  borderBottomLeftRadius,
  borderBottomRightRadius,
  textAlign,
  border,
  paddingTop,
  paddingBottom,
  paddingRight,
  paddingLeft,
  marginTop,
  marginBottom,
  marginRight,
  marginLeft,
  color,
  backgroundColor,
  opacity,
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
        opacity: opacity,
        height: height,

        borderTopLeftRadius: borderTopLeftRadius,
        borderTopRightRadius: borderTopRightRadius,
        borderBottomLeftRadius: borderBottomLeftRadius,
        borderBottomRightRadius: borderBottomRightRadius,

        minWidth: minWidth,
        maxHeight: maxHeight,
        minHeight: minHeight,
        maxWidth: maxWidth,
        width: width,
        marginTop: marginTop,
        marginBottom: marginBottom,
        marginLeft: marginLeft,
        marginRight: marginRight,
        backgroundColor: backgroundColor,
        border: border,
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
    opacity: 1,
    height: "50px",
    borderTopLeftRadius: "",
    borderTopRightRadius: "",
    borderBottomLeftRadius: "",
    borderBottomRightRadius: "",
    minHeight: "",
    maxWidth: "",
    width: "100px",
    border: "1px solid black",
    textAlign: "center",

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
