import { Card, Grid, Typography } from "@material-ui/core";
import Box from "@mui/material/Box";
import { useEffect, useRef } from "react";
import React from "react";
import ColorBox from "./ColorBox";
import "./ColorStart.css";
import Audio from "./Audio";
import Timer from "./Timer";
import Modal from "../../../shared/components/UIElements/Modal";
// import { Modal } from "react-responsive-modal";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Button from "../../../shared/components/FormElements/Button";
import FileSaver from "file-saver";
import { WaveFile } from "wavefile";
import { useState } from "react";
import { useCallback } from "react";
import { useContext } from "react";
import ErrorModal from "../../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../../shared/components/UIElements/LoadingSpinner";
import { AuthContext } from "../../../shared/context/auth-context";
import { useHttpClient } from "../../../shared/hooks/http-hook";
// import ResultPage from "./ResultPage";
function ResultPage(props) {
  const [showModal, setShowModal] = useState(false);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const auth = useContext(AuthContext);
  const history = useHistory();
  let value = Math.round(props.score * 100);

  useEffect(() => {
    const submitHandler = async () => {
      try {
        const responseData = await sendRequest(
          "http://localhost:8000/score/",
          "POST",
          JSON.stringify({
            score: value,
            type_of_test: "Rapid Color Naming",
          }),
          {
            "Content-type": "application/json",
            Authorization: "Token " + auth.token,
          }
        );
        console.log("HII");
        console.log(responseData);
        // auth.login(responseData.userId, responseData.token);
      } catch (err) {}
    };
    submitHandler();
  }, [sendRequest, auth.token, value]);
  const clearModal = () => {
    setShowModal(null);
  };
  return (
    <>
      <div className="score-text">
        {/* {showModal && ( */}
        <Modal
          onCancel={clearModal}
          header="Your Result"
          show={!isLoading}
          // addButton={true}
          footer={
            <Button onClick={() => history.push("/")}>All Quizzes</Button>
          }
        >
          <p>
            <h3>Obtained Score is : {value}</h3>
          </p>
        </Modal>
        {/* )} */}
        {/* <h3>Obtained Score is : {value}</h3> */}
        {/* <Button onClick={() => history.push("/")}>All Quizzes</Button> */}
      </div>
    </>
  );
}
const ColorStart = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);
  // console.log(auth.token);
  const [showModal, setShowModal] = useState(false);
  const [url, setUrl] = useState();
  const [score, setScore] = useState(0);
  const [request, setRequest] = useState(false);
  const [duration, setDuration] = useState(30);
  // const [audioFile, setAudioFile] = useState(null);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const colors = [
    "#FFFF00",
    "#01A0C4",
    "#FFFF00",
    "#00FF00",
    "#FE1706",
    "#EC62A2",
    "#01A0C4",
    "#F97500",
    "#00FF00",
    "#F97500",
    "#FE1706",
    "#FFFF00",
  ];
  // const file = useRef(null);
  const urlHandler = useCallback((url) => {
    // console.log(url);
    setUrl(url);
    // const fileGenerator = async () => {
    //   await fetch(url)
    //     .then((response) => response.blob())
    //     .then((blob) => {
    //       // do stuff with `blob`: `Blob`
    //       file.current = new File([blob], "file.wav", { type: "audio/wav" });
    //       // FileSaver.saveAs(file, "my-file.wav");
    //       // console.log(blob);
    //       // Create an AudioContext
    //       // const context = new AudioContext();

    //       // const arrayBuffer = FileReader.readAsArrayBuffer(file);
    //       // const audioBuffer = context.decodeAudioData(arrayBuffer);
    //       // // Helper function for creating a WAV file from an AudioBuffer
    //       // function createWAVFromAudioBuffer(audioBuffer) {
    //       //   // Create a WAV file from the AudioBuffer
    //       //   const wavFile = new WaveFile();
    //       //   wavFile.fromAudioBuffer(audioBuffer);

    //       //   // Return the WAV file data as an array buffer
    //       //   return wavFile.toBuffer();
    //       // }
    //       // wavFile = createWAVFromAudioBuffer(audioBuffer);
    //     });
    // };
    // fileGenerator();
  }, []);
  const audioSubmitHandler = async () => {
    //   const handleSave = async () => {
    //     const audioBlob = await fetch(mediaBlobUrl).then((r) => r.blob());
    //     const audioFile = new File([audioBlob], 'voice.wav', { type: 'audio/wav' });
    //     const formData = new FormData(); // preparing to send to the server

    //     formData.append('file', audioFile);  // preparing to send to the server

    //     onSaveAudio(formData); // sending to the server

    // };
    // const urlToWav = async () => {
    // const audioBlob = await fetch(url).then((r) => r.blob());
    // const audioFile = new File([url], "voice.wav", {
    //   type: "wav",
    // });
    // var last_bit= chunks[;
    // var blob = new Blob([url], { type: "audio/wav" });
    // // var audioURL = window.URL.createObjectURL(url);
    // // var file = blobToFile(blob, "my-recording.wav");
    // const fileGenerator = async () => {
    let file;
    await fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        // do stuff with `blob`: `Blob`
        file = new File([blob], "file.wav", { type: "audio/wav" });
        // FileSaver.saveAs(file, "my-file.wav");
        // console.log(blob);
        // Create an AudioContext
        // const context = new AudioContext();

        // const arrayBuffer = FileReader.readAsArrayBuffer(file);
        // const audioBuffer = context.decodeAudioData(arrayBuffer);
        // // Helper function for creating a WAV file from an AudioBuffer
        // function createWAVFromAudioBuffer(audioBuffer) {
        //   // Create a WAV file from the AudioBuffer
        //   const wavFile = new WaveFile();
        //   wavFile.fromAudioBuffer(audioBuffer);

        //   // Return the WAV file data as an array buffer
        //   return wavFile.toBuffer();
        // }
        // wavFile = createWAVFromAudioBuffer(audioBuffer);
      });
    // };
    // fileGenerator();
    // const fileObject = file;
    // const blobURL = URL.createObjectURL(new Blob([url]));

    // Use the saveAs method to save the file

    // console.log(audioFile);
    // let score = 0;
    try {
      // const reference = "YB";
      var formData = new FormData();
      formData.append("audio", file);
      formData.append("reference", "YBYGRPBOGORY");
      // formData.append("DisplayText",);
      const responseData = await sendRequest(
        "http://localhost:8000/color/",
        "POST",
        formData
      );
      console.log(responseData);
      setScore(responseData.score);
      // score = responseData.score;
    } catch (err) {}

    // if (score) {
    setRequest(true);
    // }
    // history.push("/");
    // return <ResultPage score={score} />;
  };
  // const scoreRequest = async () => {
  //   try {
  //     const responseData = await sendRequest(
  //       "http://localhost:8000/score/",
  //       "POST",
  //       JSON.stringify({
  //         score: score * 100,
  //         type_of_test: "Rapid Color Naming",
  //       }),
  //       {
  //         "Content-type": "application/json",
  //         Authorization: "Token " + auth.token,
  //       }
  //     );
  //     console.log("HII");
  //     console.log(responseData);
  //     // auth.login(responseData.userId, responseData.token);
  //   } catch (err) {}
  // };
  // if (!isLoading && score) {
  //   scoreRequest();
  // }
  // useEffect(() => {
  //   const scoreRequest = async () => {
  //     try {
  //       const responseData = await sendRequest(
  //         "http://localhost:8000/score/",
  //         "POST",
  //         JSON.stringify({
  //           score: score,
  //           type_of_test: "Rapid Color Naming",
  //         }),
  //         {
  //           "Content-type": "application/json",
  //           Authorization: "Token " + auth.token,
  //         }
  //       );
  //       console.log(responseData);
  //       // auth.login(responseData.userId, responseData.token);
  //     } catch (err) {}
  //   };

  //   scoreRequest();
  // }, []);
  const clearModal = () => {
    setShowModal(null);
  };

  const audioHandler = useCallback(() => {
    setShowModal(true);
  }, []);

  const submitHandler = () => {
    setShowModal(true);
    setDuration(0);
  };
  // const scoreRequest = async () => {
  //   console.log("HII");
  // };

  return (
    <>
      {/* <Card> */}

      <ErrorModal error={error} onClear={clearError} />

      {request && <ResultPage score={score} />}
      {/* {!request && ( */}
      <div>
        {!request && showModal && (
          <Modal
            onCancel={clearModal}
            header="Click on Submit"
            show={!isLoading}
            addButton={true}
            footer={<Button onClick={audioSubmitHandler}>Okay</Button>}
          >
            <p>
              Your respoonse has been recorded, click to Submit or press Back to
              go Back and retake the quiz
            </p>
          </Modal>
        )}
        <div className="btn-style2">
          {!isLoading && (
            <Button disabled={request} onClick={submitHandler}>
              Submit
            </Button>
          )}
        </div>
        {
          <div className="timer-box">
            <Timer handleAudio={audioHandler} time={duration} />
          </div>
        }

        <div className="color-box">
          <Grid container spacing={2} direction="row">
            {colors.map((color, i) => (
              <ColorBox col={color} key={i} />
            ))}
          </Grid>
          {isLoading && <LoadingSpinner asOverlay />}
          {/* Hii */}
        </div>
        <Audio generateUrl={showModal} handleUrl={urlHandler} />
      </div>

      {/* // )} */}
      {/* </Card> */}
    </>
  );
};

export default ColorStart;
