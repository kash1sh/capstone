import React from "react";
import Box from "@mui/material/Box";
import { Item } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import "./ColorBox.css";
const ColorBox = (props) => {
  return (
    <div>
      <Grid item xs={3}>
        {/* {colors.map((color, index) => (
            <ColorBox col={color} />
          ))} */}
        <Box
          sx={{
            width: 200,
            height: 200,
            marginRight: "2rem",
            marginLeft: "2rem",
            marginTop: "1rem",
            marginBottom: "1rem",
            paddingRight: "1rem",
            backgroundColor: props.col,
            "&:hover": {
              backgroundColor: "white",
              opacity: [0.9, 0.8, 0.7],
            },
          }}
        />
      </Grid>

      {/* <Box
        sx={{
          width: 200,
          height: 200,
          backgroundColor: props.col,
          "&:hover": {
            backgroundColor: "primary.main",
            opacity: [0.9, 0.8, 0.7],
          },
        }}
      /> */}
      {/* <Item className="cb" color={props.col}></Item> */}
    </div>
  );
};
export default ColorBox;
