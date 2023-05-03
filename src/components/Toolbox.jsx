import React from "react";
import { Box, Typography, Grid, Button as MaterialButton } from "@mui/material";
import "../styles/editor/toolbox.css";

import { Container } from "./user/Container";
import { Card } from "./user/Card";
import { Button } from "./user/Button";
import { Text } from "./user/Text";

import { Element, useEditor } from "@craftjs/core";

export const Toolbox = () => {
  const { connectors, editorEnabled } = useEditor((state) => {
    return {
      editorEnabled: state.options.enabled,
    };
  });

  if (!editorEnabled) {
    return null;
  }

  return (
    <div className="toolbox_container">
      <div className="toolbox_item_container"></div>

      <div className="toolbox_container_title">
        <h3 className="toolbox_title">Drag to add</h3>
      </div>

      <div className="toolbox_btn_container">
        <MaterialButton
          ref={(ref) =>
            connectors.create(ref, <Button text="Click me" size="small" />)
          }
          variant="contained"
        >
          Button
        </MaterialButton>
      </div>

      <div className="toolbox_text_container">
        <MaterialButton
          ref={(ref) => connectors.create(ref, <Text text="Hi world" />)}
          variant="contained"
        >
          Text
        </MaterialButton>
      </div>

      <div className="toolbox_container_container">
        <MaterialButton
          ref={(ref) =>
            connectors.create(
              ref,
              <Element is={Container} padding={20} canvas />
            )
          }
          variant="contained"
        >
          Container
        </MaterialButton>
      </div>
      <div className="toolbox_card_container">
        <MaterialButton
          ref={(ref) => connectors.create(ref, <Card />)}
          variant="contained"
        >
          Card
        </MaterialButton>
      </div>
    </div>
  );
};
