import React, { useContext } from "react";
import { useEffect } from "react";
import { quiz } from "./quiz";
// import Quiz from "react-quiz-component";
// import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
import ReactStoreIndicator from "react-score-indicator";
import { Button, Container, CssBaseline } from "@material-ui/core";
import "./ImagePack.css";
import { Link } from "react-router-dom";
import Quiz from "./quizContent/Quiz";
import { useHttpClient } from "../../../shared/hooks/http-hook";
import { AuthContext } from "../../../shared/context/auth-context";
import ErrorModal from "../../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../../shared/components/UIElements/LoadingSpinner";

let score;
const RenderCustomResultPage = (obj) => {
  // const number = 0.;
  // const ease = (duration) => {
  // return number;
  // };
  // const { width, height } = useWindowSize();

  const width = window.innerWidth;
  const height = window.innerHeight;

  // console.log("HI");
  // console.log(obj);
  const f = obj.correctPoints === obj.totalPoints;
  score = obj.correctPoints;
  return (
    <div className="result">
      {f && <Confetti width={width} height={height} />}
      <h4 className="text-result">
        You scored {obj.correctPoints} points out of {obj.totalPoints}
      </h4>
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

const ImagePack = () => {
  const authCtx = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const completeHandler = async (obj) => {
    try {
      const responseData = await sendRequest(
        "http://localhost:8000/score/",
        "POST",
        JSON.stringify({
          score: obj.correctPoints,
          type_of_test: "Object Classification Test",
        }),
        {
          "Content-type": "application/json",
          Authorization: "Token " + authCtx.token,
        }
      );
      console.log(responseData);
      // auth.login(responseData.userId, responseData.token);
    } catch (err) {}
  };
  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      <div>
        {/* <CssBaseline /> */}
        {isLoading && <LoadingSpinner asOverlay />}
        <div className="quiz4">
          <Container>
            {/* <Quiz
            quiz={quiz}
            shuffle={true}
            showDefaultResult={false}
            customResultPage={RenderCustomResultPage}
          /> */}
            <Quiz quiz={quiz} shuffle={true} onComplete={completeHandler} />
          </Container>
        </div>
      </div>
    </>
  );
};
export default ImagePack;
