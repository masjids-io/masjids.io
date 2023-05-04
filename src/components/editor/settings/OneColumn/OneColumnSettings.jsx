import { Paper, FormControl, FormLabel, Slider } from "@mui/material";

import { useNode } from "@craftjs/core";
import { GlobalSettings } from "../general/GlobalSettings";
import { Dimension } from "../general/DImension";

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
      <GlobalSettings />
      <Dimension />
      <FormControl fullWidth={true} margin="normal" component="fieldset">
        <FormLabel component="legend">Background</FormLabel>
        <input
          type="color"
          name="color"
          id="color"
          value={background}
          onChange={(event) => {
             setProp((props) => (props.background = event.target.value));
          }}
        />
      </FormControl>
    </div>
  );
};
