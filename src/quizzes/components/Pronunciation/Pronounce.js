import { Card, CardMedia } from "@material-ui/core";
import React, { useState } from "react";
import "./Pronounce.css";
import { SvgIcon } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import MicIcon from "@mui/icons-material/Mic";
// import { words } from "./words";
import Audio from "./Audio";

const words = ["Blunt", "Blunt2"];
const Pronounce = () => {
  // console.log(words.questions);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [resultState, setResultState] = useState(false);
  const nextHandler = () => {
    setQuestionIndex((prevState) => prevState + 1);
    if (questionIndex === words.length - 1) {
      setResultState(true);
    }
  };
  return (
    <div>
      <Card
        className="recording-card"
        variant="outlined"
        sx={{ minWidth: 275 }}
      >
        {/* <div className="mic">
          <SvgIcon component={MicIcon} color="primary" fontSize="inherit" />
        </div> */}
        {console.log(questionIndex)}
        {!resultState && (
          <div>
            <div className="content-word">
              <div className="word-guess">
                <div className="dynamic-names">{words[questionIndex]}</div>
              </div>
              <div>
                <Audio />
              </div>
            </div>

            <div className="next-icon" onClick={nextHandler}>
              <NavigateNextIcon />
            </div>
          </div>
        )}
        {resultState && (
          <div>
            <h3>Submit Modal</h3>
          </div>
        )}
      </Card>
    </div>
  );
};

export default Pronounce;
