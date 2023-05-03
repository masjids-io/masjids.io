import React, { useState, useEffect } from "react";
import { Typography, Paper, Grid } from "@mui/material";
import "../../styles/editor/editor.css";
import { Toolbox } from "../../components/editor/Toolbox";
import { SettingsPanel } from "../../components/editor/SettingsPanel";
import { Topbar } from "../../components/editor/Topbar";

import { Container } from "../../components/user/Container";
import { Button } from "../../components/user/Button";
import { Card, CardTop, CardBottom } from "../../components/user/Card";
import { Text } from "../../components/user/Text";

import lz from "lzutf8";
import { Editor, Frame, Element, useEditor } from "@craftjs/core";

const defaultFrameChildren = // default components when user first loads page
  (
    <Element is={Container} padding={5} background="#eee" canvas>
      <Card />
      <Button size="small" variant="outlined">
        Click
      </Button>
      <Text size="small" text="Hi world!" />
      <Element is={Container} padding={2} background="#999" canvas>
        <Text size="small" text="It's me again!" />
      </Element>
    </Element>
  );

const FrameContent = ({ jsonData, editMode }) => {
  const { enabled, actions } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));
  actions.setOptions(
    (options) => (options.enabled = window.localStorage.getItem("enable"))
  );
  // Fix Craft.js bug
  useEffect(() => {
    setTimeout(() => {
      actions.setOptions((options) => (options.enabled = !enabled));
      actions.setOptions((options) => (options.enabled = enabled));
    });
  }, []);
  return <Frame data={jsonData}>{defaultFrameChildren}</Frame>;
};

export default function PageEditor() {
  let jsonData = window.localStorage.getItem("jsonData") ?? null;
  if (jsonData) {
    jsonData = lz.decompress(lz.decodeBase64(jsonData));
  }

  return (
    <div className="editor_container">
      <Editor
        resolver={{ Card, CardTop, CardBottom, Button, Text, Container }}
        enabled={false}
      >
        <div className="editor_global_container">
          <Topbar />
          <div className="editor_container_items">
            <div className="editor_container_toolbox">
              <Toolbox />
            </div>
            <div className="editor_container_playground">
              <FrameContent jsonData={jsonData} />{" "}
              {/* the background of playground should be zoomable */}
            </div>
            <div className="editor_container_settings">
              <SettingsPanel />
            </div>
          </div>
        </div>
      </Editor>
    </div>
  );
}
