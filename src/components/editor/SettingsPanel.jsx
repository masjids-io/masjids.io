import React from "react";
import {
  Box,
  Chip,
  Grid,
  Typography,
  Button as MaterialButton,
} from "@mui/material";

import { useSelector } from "react-redux";
import { selectEnabled } from "../../features/toolboxSlice";

import { useEditor } from "@craftjs/core";

export const SettingsPanel = () => {
  const { selected, editorEnabled, actions } = useEditor((state, query) => {
    const selectedSet = state.events.selected;
    const selectedArray = selectedSet ? [...selectedSet] : [];
    const currentNodeId = selectedArray[0];
    let selected = null;
    if (currentNodeId) {
      selected = {
        id: currentNodeId,
        name: state.nodes[currentNodeId]?.data?.name,
        settings: state.nodes[currentNodeId]?.related?.settings,
        isDeletable: query.node(currentNodeId).isDeletable(),
      };
    }

    return {
      selected,
      editorEnabled: state.options.enabled,
    };
  });

  if (!editorEnabled) {
    return null;
  }

  return (
    (selected ? (
      <Box bgcolor="rgba(0, 0, 0, 0.06)" mt={2} px={2} py={2}>
        <Grid container direction="column" spacing={0}>
          <Grid item>
            <Box pb={2}>
              <Grid container alignItems="center">
                <Grid item xs>
                  <Typography variant="subtitle1">Selected</Typography>
                </Grid>
                <Grid item>
                  <Chip size="small" color="primary" label={selected.name} />
                </Grid>
              </Grid>
            </Box>
          </Grid>
          {selected.settings && React.createElement(selected.settings)}
          {selected.isDeletable ? (
            <MaterialButton
              variant="contained"
              color="inherit"
              onClick={() => {
                actions.delete(selected.id);
              }}
            >
              Delete
            </MaterialButton>
          ) : null}
        </Grid>
      </Box>
    ):   <h1>nothing to show</h1>)
  ) 
};
