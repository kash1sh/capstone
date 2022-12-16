import React from "react";
import Box from "@mui/material/Box";
import { Item } from "@material-ui/core";
import { Grid, Grow } from "@material-ui/core";
import { Container, Row } from "react-grid-system";

import "./ColorBox.css";
const ColorBox = (props) => {
  return (
    <div>
      <Grow in>
        {/* <Grid item xs={8} md={4}> */}
        {/* <Grid spacing={2}>
          
          <Box
            sx={{
              width: 155,
              height: 140,
              marginRight: "3.5rem",
              marginLeft: "4.5rem",
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
        </Grid> */}
        <Container>
          <Row>
            <Box
              sx={{
                width: 178,
                height: 157,
                marginRight: "3rem",
                marginLeft: "3.8rem",
                marginTop: "0.7rem",
                // marginBottom: "0.1rem",
                paddingRight: "0.7rem",
                backgroundColor: props.col,
                "&:hover": {
                  backgroundColor: "white",
                  opacity: [0.4, 0.5, 0.8],
                },
              }}
            />
            {/* <Col sm={6}>One of three columns</Col> */}
            {/* <Col sm={6}>One of three columns</Col> */}
            {/* <Col sm={6}>One of three columns</Col> */}
          </Row>
        </Container>
      </Grow>
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
