import { useNode } from "@craftjs/core";
import { GlobalSettings } from "../general/GlobalSettings";
import {
  Button as MaterialButton,
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
} from "@mui/material";
import { Dimension } from "../general/DImension";

export const ButtonSettings = () => {
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <div>
      <GlobalSettings />
      <Dimension />
    </div>
  );
};
