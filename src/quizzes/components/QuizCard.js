import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import useStyles from "./styles";
import { Grid, Grow, Typography, Button } from "@material-ui/core";
// import Button from "../../shared/components/FormElements/Button";
// import Modal from "../../shared/components/UIElements/Modal";
// import ImageDetect from "./ImageDetect/ImageDetect";
// import ImagePack from "./ImageDetect/ImagePack";
import "./QuizCard.css";
// import Quiz from "react-quiz-component";
// import { quiz } from "./ImageDetect/quiz";
// import ImageDetection from "./ImageDetection/ImageDetection";

const infoCards = [
  {
    color: "#0d98ba",
    title: "Pronounciation Test",
    info: "The Child has to read the sentence that appears ",
    text: "Improvement in Reading Skills",
  },
  {
    color: "#1565c0",
    title: "Writing Test",
    info: "The Child has to write the given words",
    text: "Improvement in Writing Skills",
  },
  {
    color: "#4527a0",
    title: "Colour Test",
    info: "The Child has quickly identify the colors in front of him",
    text: "Improvement in performance under pressure scenarios",
  },
  {
    color: "#536895",
    title: "Image Identification Test",
    info: "The Child has to pick the correct name for the image",
    text: "Improvement in identification ability",
  },
];

const QuizCard = () => {
  // const [showModal, setShowModal] = useState(false);
  // const openModalHandler = () => {
  //   setShowModal(true);
  // };
  // const closeModalHandler = () => {
  //   setShowModal(false);
  // };
  const classes = useStyles();
  return (
    <div>
      {/* <h1>QuizCards</h1> */}

      <Grow in>
        <Grid
          className={classes.container}
          container
          alignItems="stretch"
          spacing={3}
        >
          {infoCards.map((infoCard, index) => (
            // <div>

            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              className={classes.infoCard}
            >
              {/* <Modal
                show={showModal}
                onCancel={closeModalHandler}
                header="Quiz"
                contentClass="place-item__modal-content"
                // footerClass="place-item__modal-actions"
                // footer={
                //   <Button
                //     color="success"
                //     variant="contained"
                //     onClick={closeModalHandler}
                //   >
                //     CLOSE
                // </Button>
                // }
              >
                <div className="map-container map">
                  <Quiz quiz={quiz} shuffle={true} showInstantFeedback={true} />
                </div>
              </Modal> */}
              <div
                className={classes.card}
                style={{ backgroundColor: infoCard.color }}
              >
                <Typography variant="h5" href="www.google.com">
                  {infoCard.title}
                </Typography>

                {infoCard.info ? (
                  <Typography variant="h6">
                    <strong>Task</strong>
                    <br />
                    {infoCard.info}
                  </Typography>
                ) : null}
                <Typography variant="h6">
                  Motive : <br /> <i>{infoCard.text}</i>
                </Typography>
                <Button
                  variant="contained"
                  color="secondary"
                  // href="/quiz/4"
                  // onClick={openModalHandler}
                >
                  <NavLink to={`/quiz/${index + 1}`}> Start Test</NavLink>
                  {/* <Link to={`/quiz/${index + 1}`}>Start Test</Link> */}
                </Button>
              </div>
            </Grid>
            // </div>
          ))}
        </Grid>
      </Grow>
    </div>
  );
};

export default QuizCard;
