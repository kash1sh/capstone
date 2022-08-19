import { Grid, Typography } from "@material-ui/core";
import Box from "@mui/material/Box";
import { useEffect } from "react";
import React from "react";
import ColorBox from "./ColorBox";
import "./ColorStart.css";
import Audio from "./Audio";
import Timer from "./Timer";

const ColorStart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const colors = [
    "red",
    "indigo",
    "green",
    "yellow",
    "orange",
    "red",
    "blue",
    "aqua",
    "teal",
    "salmon",
    "blue",
    "green",
    "yellow",
    "orange",
    "purple",
    "aqua",
    "teal",
    "indigo",
  ];

  return (
    <div>
      <div className="timer-box">
        <Timer />
      </div>
      <div className="color-box">
        <Grid container spacing={2} direction="row">
          {colors.map((color) => (
            <ColorBox col={color} />
          ))}
        </Grid>

        {/* Hii */}
      </div>
      <Audio />
    </div>
  );
};

export default ColorStart;
