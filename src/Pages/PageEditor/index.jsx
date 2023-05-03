import React, { useState, useEffect } from 'react';
import {Typography, Paper, Grid} from '@mui/material';

import { Toolbox } from '../../components/Toolbox';
import { SettingsPanel } from '../../components/SettingsPanel';
import { Topbar } from '../../components/Topbar';

import { Container } from '../../components/user/Container';
import { Button } from '../../components/user/Button';
import { Card, CardTop, CardBottom } from '../../components/user/Card';
import { Text } from '../../components/user/Text';

import lz from "lzutf8";
import {Editor, Frame, Element, useEditor} from "@craftjs/core";

const defaultFrameChildren = (
  <Element is={Container} padding={5} background="#eee" canvas>
    <Card />
    <Button size="small" variant="outlined">Click</Button>
    <Text size="small" text="Hi world!" />
    <Element is={Container} padding={2} background="#999" canvas>
      <Text size="small" text="It's me again!" />
    </Element>
  </Element>
);

const FrameContent = ({ jsonData, editMode }) => {
  const { enabled, actions } = useEditor(state => ({ enabled: state.options.enabled }));
  // Fix Craft.js bug
  useEffect(() => {
    setTimeout(() => {
      actions.setOptions(options => options.enabled = !enabled);
      actions.setOptions(options => options.enabled = enabled);
    });
  }, []);
  return (
    <Frame data={jsonData}>
      {defaultFrameChildren}
    </Frame>
  );
}

export default function PageEditor() {
  let jsonData = window.localStorage.getItem('jsonData') ?? null;
  if(jsonData) { jsonData = lz.decompress(lz.decodeBase64(jsonData)); }
  return (
    <div style={{margin: "0 auto", width: "800px"}}>
      <Typography variant="h5" align="center">will be complete soon inchallah</Typography>
      <Editor resolver={{Card, CardTop, CardBottom, Button, Text, Container}} enabled={false}>
        <Topbar />
        <Grid container spacing={3} style={{paddingTop: "10px"}}>
          <Grid item xs>
            <FrameContent jsonData={jsonData}/>
          </Grid>
          <Grid item xs={3}>
            <Paper>
              <Toolbox />
              <SettingsPanel />
            </Paper>          
          </Grid>
        </Grid>
      </Editor>
    </div>
  );
}