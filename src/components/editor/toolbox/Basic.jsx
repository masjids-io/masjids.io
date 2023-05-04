import React from "react";
import { Box, Typography, Grid, Button as MaterialButton } from "@mui/material";
import { useEditor } from "@craftjs/core";
import "../../../styles/editor/components/basic.css";

import { Container } from "../../user/Container";
import { Card } from "../../user/Card";
import { Button } from "../../user/Button";
import { Text } from "../../user/Text";
import { Element } from "@craftjs/core";
import { ReactComponent as OneColumnContainer } from "../../../assets/OneColumnContainer.svg";
import { ReactComponent as Image } from "../../../assets/Image.svg";
import { ReactComponent as ButtonIcon } from "../../../assets/ButtonIcon.svg";
import { ReactComponent as Video } from "../../../assets/Video.svg";
import { ReactComponent as Link } from "../../../assets/Link.svg";
import { ReactComponent as LinkBlock } from "../../../assets/LinkBlock.svg";
import { ReactComponent as Paragraph } from "../../../assets/Paragraph.svg";
import { ReactComponent as TextIcon } from "../../../assets/Text.svg";
import { ReactComponent as TwoColumnContainer } from "../../../assets/TwoColumnContainer.svg";
import { ReactComponent as Map } from "../../../assets/Map.svg";
import { ReactComponent as Quote } from "../../../assets/Quote.svg";

function Basic() {
  const { connectors, editorEnabled } = useEditor((state) => {
    return {
      editorEnabled: state.options.enabled,
    };
  });
  return (
    <div className="basic_toolbox">
      <div
        className="basic_toolbox_comp basic_toolbox_container_container"
        ref={(ref) =>
          connectors.create(
            ref,
            <div>
              <Element is={Container} padding={20} canvas />
            </div>
          )
        }
        variant="contained"
      >
        <OneColumnContainer width={"44px"} color={"white"}/>
        <p style={{color: 'white', fontSize: "10px" }}>One Column</p>
      </div>
      <div
        className="basic_toolbox_comp basic_toolbox_two_colomn_container"
        ref={(ref) =>
          connectors.create(
            ref,
            <div className="toolbox_rendered_two_colomn_container">
              <div  className="element_container">
                <Element is={Container} padding={20} canvas />
              </div>
              <div className="element_container">
                <Element is={Container} padding={20} canvas />
              </div>
            </div>
          )
        }
        variant="contained"
      >
        <TwoColumnContainer width={"44px"}  color={"white"}/>
        <p style={{color: 'white', fontSize: "10px" }}>Two Column</p>
      </div>
      <div className="basic_toolbox_comp basic_toolbox_btn_container">
        <div
          ref={(ref) =>
            connectors.create(ref, <Button text="Click me" color={"white"} textAlign={"center"}/>)
          }
        >
        <ButtonIcon width={"44px"}  color={'white'}/>
        <p style={{color: 'white', fontSize: "10px" }}>Button</p>
        </div>
      </div>

      <div className="basic_toolbox_comp basic_toolbox_text_container" ref={(ref) => connectors.create(ref, <Text text="Hi world" />)}
          variant="contained">
 
                    <TextIcon width={"44px"}  color={'white'}/>
        <p style={{color: 'white', fontSize: "10px" }}>Text</p>
          
 
      </div>

      {/* <div className="basic_toolbox_card_container">
        <MaterialButton
          ref={(ref) => connectors.create(ref, <Card />)}
          variant="contained"
        >
          Card
        </MaterialButton>
      </div> */}
    </div>
  );
}

export default Basic;
