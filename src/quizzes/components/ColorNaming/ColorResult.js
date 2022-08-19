// import React, { useState } from "react";
// import Typography from "@mui/material/Typography";
// import Button from "@mui/material/Button";
// // import { Link } from "react-router-dom";
// import ColorStart from "./ColorStart";
// import "./ColorResult.css";
// const ColorResult = () => {
//   const [start, setStart] = useState(false);
//   <div className="color-body">
//     {/* {start && <ColorStart />}
//     <Typography variant="h1" component="h2">
//       Name the Color Quiz!!
//     </Typography>
//     <Typography variant="h2" component="h2">
//       You have 2 minutes to answer the questions.
//     </Typography>
//     <Typography variant="h2" component="h2">
//       You will be redirected to the score page after 10 minutes.
//     </Typography>
//     <Button
//       color="success"
//       variant="contained"
//       onClick={() => setStart(true)}
//       // onClick={closeModalHandler}
//     >
//       Start
//     </Button> */}
//     <ColorStart />
//   </div>;
// };

// export default ColorResult;

import { Grid, Typography, Card } from "@material-ui/core";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useEffect } from "react";
import React, { useState } from "react";
import ColorStart from "./ColorStart";
import "./ColorResult.css";

const ColorResult = () => {
  const [start, setStart] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="react-quiz-container">
      {start && <ColorStart />}
      <div className="questionWrapper">
        {!start && (
          // <div>

          //   <Typography variant="h1" component="h2">
          //     Name the Color Quiz!!
          //   </Typography>
          //   <Typography variant="h2" component="h2">
          //     You have 2 minutes to answer the questions.
          //   </Typography>
          //   <Typography variant="h2" component="h2">
          //     You will be redirected to the score page after 10 minutes.
          //   </Typography>
          //   <Button
          //     color="primary"
          //     variant="contained"
          //     size="large"
          //     style={{ margin: "auto" }}
          //     onClick={() => setStart(true)}

          //   >
          //     Start
          //   </Button>
          // </div>
          <div>
            <Card className="quest-card" variant="outlined">
              {/* <h2>{quiz.quizTitle}</h2> */}
              <div className="quiz-title">
                <Typography variant="h4" align="center" gutterBottom>
                  Speed Color Naming Quiz
                </Typography>
              </div>

              <div className="quiz-syn">
                <Typography paragraph>
                  <div className="quiz-synopsis">
                    You have 2 minutes to answer the questions. You will be
                    redirected to the score page after 10 minutes.
                  </div>
                </Typography>
              </div>
              <div className="startQuizWrapper">
                <Button
                  variant="contained"
                  color="primary"
                  align="center"
                  size="large"
                  onClick={() => setStart(true)}
                  className="startQuizBtn btn"
                >
                  Start
                </Button>
              </div>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default ColorResult;
