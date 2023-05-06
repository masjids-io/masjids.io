import { useState } from "react";
import { useNode } from "@craftjs/core";
import "../../../../../../styles/editor/settings.css";

export const Opacity = () => {
  const [opacity, setOpacity] = useState();
  const {
    actions: { setProp },
    props,
  } = useNode((node) => ({
    props: node.data.props,
  }));
  return (
    <div className="style_opacity">
      <p className="style_opacity_title">opacity</p>
      <div className="style_opacity_settings">
        <input
          value={opacity}
          type="range"
          defaultValue={props.opacity}
          name="style_opacity"
          id="style_opacity"
          onChange={(event) => {
            setOpacity(event.target.value);
            setProp((props) => (props.opacity = parseFloat(event.target.value)));
          }}
          min={0}
          max={1}
          step={0.01}
        />
        {props.opacity ? (
            <input
            className="heigh_input modified"
            type="number"
            id="bottomrightbr"
            max={1}
            min={0}
            step={0.01}
            value={opacity}
            placeholder={props.opacity}
            onChange={(event) => {
                setOpacity(event.target.value);
                setProp(
                (props) =>
                  (props.opacity = `${event.target.value}`)
              );
            }}
          />
   
        ) : (
          <p className="style_opacity_index">1</p>
        )}
      </div>
    </div>
  );
};

export default Opacity;
