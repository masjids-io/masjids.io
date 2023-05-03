import React from "react";
import "../../styles/editor/settings.css";
import General from "./settings/General";
import {
  Box,
  Chip,
  Grid,
  Typography,
  Button as MaterialButton,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { useSelector } from "react-redux";
 import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "./widgets/Accordion";

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

  return selected ? (
    <div className="settings_global_container">
      <div className="settings_container_header">
        <h2>Selected</h2>

        <div className="settings_chip">
          <p>{selected.name}</p>
        </div>
      </div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>General</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <General />
        </AccordionDetails>
      </Accordion>
      {selected.settings && React.createElement(selected.settings)}

      {selected.isDeletable ? (
        <button
          variant="contained"
          color="inherit"
          onClick={() => {
            actions.delete(selected.id);
          }}
        >
          Delete
        </button>
      ) : null}
    </div>
  ) : (
    <h1>nothing to show</h1>
  );
};
