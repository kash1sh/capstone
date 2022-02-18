import React from "react";
import { Button } from "@material-ui/core";
import QuizCard from "../components/QuizCard";

import "./Quizzes.css";

const Quizzes = () => {
  //   <QuizCard />;
  return (
    // <div className="left">
    <div className="container">
      <div className="left-container">
        <QuizCard />
      </div>

      <div className="right-container">
        {/* <div className="dashed-lines"></div> */}
        {/* <Button type="submit"></Button> */}
        <div className="butt">
          <Button color="secondary" className="btn" variant="outlined">
            View Previous Results
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Quizzes;
