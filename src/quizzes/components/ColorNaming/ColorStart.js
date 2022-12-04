import { Grid, Typography } from "@material-ui/core";
import Box from "@mui/material/Box";
import { useEffect } from "react";
import React from "react";
import ColorBox from "./ColorBox";
import "./ColorStart.css";
import Audio from "./Audio";
import Timer from "./Timer";
import Modal from "../../../shared/components/UIElements/Modal";
// import { Modal } from "react-responsive-modal";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Button from "../../../shared/components/FormElements/Button";
import { useState } from "react";
import { useCallback } from "react";
import { useContext } from "react";
import { AuthContext } from "../../../shared/context/auth-context";

const ColorStart = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);
  console.log(auth.token);
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const colors = [
    "#FF0000",
    "white",

    "#FFFF00",
    "#FFB6C1",
    "#FF0000",
    "blue",
    "#00FFFF",
    "#00FF00",
    "red",
    "white",
    "#00FFFF",

    "#00FF00",
    "#FFFF00",
    "orange",
    "#FFB6C1",
  ];

  const audioSubmitHandler = () => {
    //   const handleSave = async () => {
    //     const audioBlob = await fetch(mediaBlobUrl).then((r) => r.blob());
    //     const audioFile = new File([audioBlob], 'voice.wav', { type: 'audio/wav' });
    //     const formData = new FormData(); // preparing to send to the server

    //     formData.append('file', audioFile);  // preparing to send to the server

    //     onSaveAudio(formData); // sending to the server

    // };
    history.push("/");
  };
  const clearModal = () => {
    setShowModal(null);
  };

  const audioHandler = useCallback(() => {
    setShowModal(true);
  }, []);

  return (
    <div>
      {showModal && (
        <Modal
          onCancel={clearModal}
          header="Click on Submit"
          show={true}
          addButton={true}
          footer={<Button onClick={audioSubmitHandler}>Okay</Button>}
        >
          <p>
            Your respoonse has been recorded, click to Submit or press Back to
            go Back and retake the quiz
          </p>
        </Modal>
      )}
      <div className="timer-box">
        <Timer handleAudio={audioHandler} />
      </div>
      <div className="color-box">
        <Grid container spacing={2} direction="row">
          {colors.map((color, i) => (
            <ColorBox col={color} key={i} />
          ))}
        </Grid>

        {/* Hii */}
      </div>
      <Audio generateUrl={showModal} />
    </div>
  );
};

export default ColorStart;
