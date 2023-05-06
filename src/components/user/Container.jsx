import React from "react";
import { Paper, FormControl, FormLabel, Slider } from "@mui/material";

import { useNode } from "@craftjs/core";
import { ContainerSettings } from "../editor/settings/OneColumn/OneColumnSettings";

export const Container = ({
  height: height,
  minWidth: minWidth,
  maxHeight: maxHeight,
  minHeight: minHeight,
  maxWidth: maxWidth,
  width: width,
 
  marginTop: marginTop,
  marginBottom: marginBottom,
  marginLeft: marginLeft,
  marginRight: marginRight,
 
  paddingTop: paddingTop,
  paddingBottom: paddingBottom,
  paddingRight: paddingRight,
  paddingLeft: paddingLeft,
  background,

  children,
}) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <Paper
      ref={(ref) => connect(drag(ref))}
      style={{
        backgroundColor: background,
        height: height,
        minWidth: minWidth,
        maxHeight: maxHeight,
        minHeight: minHeight,
        maxWidth: maxWidth,
        width: width,
 
        marginTop: marginTop,
        marginBottom: marginBottom,
        marginLeft: marginLeft,
        marginRight: marginRight,
 

        paddingTop: paddingTop,
        paddingBottom: paddingBottom,
        paddingRight: paddingRight,
        paddingLeft: paddingLeft,

       }}
    >
      {children}
    </Paper>
  );
};

Container.craft = {
  props: {
 
    height: "100px",
    width: "100%",
 

    background: "#ffffff",
  },
  related: {
    settings: ContainerSettings,
  },
};
