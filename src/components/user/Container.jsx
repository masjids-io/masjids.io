import React from "react";
import { Paper, FormControl, FormLabel, Slider } from "@mui/material";

import { useNode } from "@craftjs/core";

export const Container = ({ background, padding = 0, children }) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <Paper
      ref={(ref) => connect(drag(ref))}
      style={{
        margin: "5px 0",
        backgroundColor: background,
        padding: `${padding}px`,
      }}
    >
      {children}
    </Paper>
  );
};

export const ContainerSettings = () => {
  const {
    background,
    padding,
    actions: { setProp },
  } = useNode((node) => ({
    background: node.data.props.background,
    padding: node.data.props.padding,
  }));
  return (
    <div>
      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <FormLabel component="legend">Background</FormLabel>
        <input
          type="color"
          name="color"
          id="color"
          value={ background}
          onChange={(event) => {
            console.log("background-color: ", event.target.value);
            setProp((props) => (props.background = event.target.value));
          }}
        />
      </FormControl>
      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <FormLabel component="legend">Padding</FormLabel>
        <Slider
          value={padding}
          onChange={(_, value) => setProp((props) => (props.padding = value))}
        />
      </FormControl>
    </div>
  );
};

Container.craft = {
  props: {
    background: "#ffffff",
    padding: 3,
  },
  related: {
    settings: ContainerSettings,
  },
};
