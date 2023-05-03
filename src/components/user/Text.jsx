import React, { useState, useEffect } from "react";
import ContentEditable from 'react-contenteditable'
import {Slider, FormControl, FormLabel} from "@mui/material";

import { useEditor, useNode } from "@craftjs/core";

export const Text = ({text, fontSize}) => {
  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled
  }));
  const { connectors: {connect, drag}, selected, actions: {setProp} } = useNode((state) => ({
    selected: state.events.selected,
    dragged: state.events.dragged
  }));
  const [editable, setEditable] = useState(false);
  useEffect(() => {
    if(!selected) { setEditable(false) }
  }, [ selected ]);
  return (
    <div ref={ref => connect(drag(ref))} onClick={() => setEditable(true)}>
      <ContentEditable
        html={text} 
        onChange={e => 
          setProp(props => 
            props.text = e.target.value.replace(/<\/?[^>]+(>|$)/g, "")  
          )
        } 
        tagName="p"
        style={{fontSize: `${fontSize}px`}}
        disabled={!enabled || !editable}
      />
    </div>
  )
}

const TextSettings = () => {
  const { actions: {setProp}, fontSize } = useNode((node) => ({
    fontSize: node.data.props.fontSize
  }));

  return (
    <>
      <FormControl size="small" component="fieldset">
        <FormLabel component="legend">Font size</FormLabel>
        <Slider
          value={fontSize || 7}
          step={7}
          min={1}
          max={50}
          onChange={(_, value) => {
            setProp(props => props.fontSize = value);
          }}
        />
      </FormControl>
    </>
  )
}

Text.craft = {
  props: {
    text: "Hi",
    fontSize: 20
  },
  related: {
    settings: TextSettings
  }  
}