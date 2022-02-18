import React from "react";
import { useEffect } from "react";
import { quiz } from "./quiz";
// import Quiz from "react-quiz-component";
// import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import ReactStoreIndicator from "react-score-indicator";
import { Button, Container, CssBaseline } from "@material-ui/core";
import "./Start.css";
import { Link } from "react-router-dom";
import Quiz from "./TestContent/Quiz";

const RenderCustomResultPage = (obj) => {
  // const number = 0.;
  // const ease = (duration) => {
  // return number;
  // };
  // const { width, height } = useWindowSize();

  const width = window.innerWidth;
  const height = window.innerHeight;
  console.log("HI");
  console.log(obj);
  const f = obj.correctPoints === obj.totalPoints;
  return (
    <div className="result">
      {f && <Confetti width={width} height={height} />}
      <h2>
        You scored {obj.correctPoints} points out of {obj.totalPoints}
      </h2>
      {/* page */}
      <ReactStoreIndicator
        value={obj.correctPoints}
        maxValue={obj.totalPoints}
      />
      <Button
        color="success"
        variant="contained"
        // onClick={closeModalHandler}
      >
        <Link to="/">CLOSE</Link>
      </Button>
    </div>
  );
};
const Start = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      {/* <CssBaseline /> */}

      <div className="quiz4">
        <Container>
          {/* <Quiz
            quiz={quiz}
            shuffle={true}
            showDefaultResult={false}
            customResultPage={RenderCustomResultPage}
          /> */}
          <Quiz quiz={quiz} shuffle={true} />
        </Container>
      </div>
    </div>
  );
};
export default Start;
