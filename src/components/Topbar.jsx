import React, { useEffect, useState } from "react";
import '../styles/editor/components/topbar.css'

import {
  Box,
  FormControlLabel,
  Switch,
  Grid,
  Button as MaterialButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
  Snackbar,
} from "@mui/material";
import lz from "lzutf8";
import copy from "copy-to-clipboard";



import { useEditor } from "@craftjs/core";

export const Topbar = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState();
  const [stateToLoad, setStateToLoad] = useState();
  let isEnabled = false;
  const { actions, query, enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));
  isEnabled = enabled;

  useEffect(() => {
    isEnabled = window.localStorage.getItem("enabled");
  }, []);

  const copyCurrentState = () => {
    const json = query.serialize();
    console.log(json);
    const encodedData = lz.encodeBase64(lz.compress(json));
    copy(encodedData);
    window.localStorage.setItem("jsonData", encodedData);
    setSnackbarMessage(
      "Copied to clipboard, and saved to localStorage! Refresh your browser to see effect!"
    );
  };

  const loadState = () => {
    setDialogOpen(false);
    const json = lz.decompress(lz.decodeBase64(stateToLoad));
    actions.deserialize(json);
    setSnackbarMessage("State loaded");
  };

  return (
    <div className="topbar_global_container">
      <div className="topbar_container_items">
        <div className="topbar_container_enable">
          <FormControlLabel //TODO: chang this and style it later
            control={
              <Switch
                checked={isEnabled}
                onChange={(_, value) => {
                  window.localStorage.setItem("enabled", value);
                  isEnabled = value;
                  actions.setOptions((options) => (options.enabled = value));
                }}
              />
            }
            label="Enable"
          />
        </div>
        <div className="topbar_btn_container">
          <MaterialButton //TODO: make custom buttons later
            onClick={copyCurrentState}
            size="small"
            variant="outlined"
            color="secondary"
          >
            Copy & Save to localStorage
          </MaterialButton>
        </div>

        <MaterialButton
          className="load-state-btn"
          size="small"
          variant="outlined"
          color="secondary"
          onClick={() => setDialogOpen(true)}
        >
          Load
        </MaterialButton>
        <Dialog
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
          fullWidth
          maxWidth="md"
        >
          <DialogTitle id="alert-dialog-title">Load state</DialogTitle>
          <DialogContent>
            <TextField
              multiline
              fullWidth
              placeholder='Paste the contents that was copied from the "Copy Current State" button'
              size="small"
              value={stateToLoad}
              onChange={(e) => setStateToLoad(e.target.value)}
            />
          </DialogContent>
          <DialogActions>
            <MaterialButton
              onClick={() => setDialogOpen(false)}
              color="primary"
            >
              Cancel
            </MaterialButton>
            <MaterialButton onClick={loadState} color="primary" autoFocus>
              Load
            </MaterialButton>
          </DialogActions>
        </Dialog>
        <Snackbar
          autoHideDuration={5000}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          open={!!snackbarMessage}
          onClose={() => setSnackbarMessage(null)}
          message={<span>{snackbarMessage}</span>}
        />
      </div>{" "}
    </div>
  );
};
