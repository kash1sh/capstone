import { Card, CardMedia } from "@material-ui/core";
import React, { useState, useCallback, useContext } from "react";
import "./Pronounce.css";
import { SvgIcon } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import MicIcon from "@mui/icons-material/Mic";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";

// import { words } from "./words";
import Audio from "./Audio";
import Button from "../../../shared/components/FormElements/Button";
import { useHttpClient } from "../../../shared/hooks/http-hook";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { AuthContext } from "../../../shared/context/auth-context";
import LoadingSpinner from "../../../shared/components/UIElements/LoadingSpinner";
import ErrorModal from "../../../shared/components/UIElements/ErrorModal";
import Modal from "../../../shared/components/UIElements/Modal";
import { useEffect } from "react";

const words = [
  "This is a pronunciation test specially for dyslexic students",
  "The main focus of this test is to improve the reading skills",
  "This is one of the four tests that are conducted in this site",
];
function ResultPage(props) {
  const [showModal, setShowModal] = useState(false);
  console.log(props.data);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const auth = useContext(AuthContext);
  const history = useHistory();
  // let value = Math.round(props.score * 100);

  const { Confidence, AccuracyScore, CompletenessScore, PronScore } =
    props.data;
  let value = Math.round(Confidence * 100);
  useEffect(() => {
    const submitHandler = async () => {
      try {
        const responseData = await sendRequest(
          "http://localhost:8000/score/",
          "POST",
          JSON.stringify({
            score: value,
            type_of_test: "Reading Comprehension Test",
          }),
          {
            "Content-type": "application/json",
            Authorization: "Token " + auth.token,
          }
        );
        console.log(responseData);
        console.log(responseData.NBest[0]);
        // auth.login(responseData.userId, responseData.token);
      } catch (err) {}
    };
    submitHandler();
  }, [sendRequest, auth.token, value, AccuracyScore]);
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
          <Table>
            <Thead>
              <Tr>
                {/* <Th>Field</Th> */}
                {/* <Th>Score</Th> */}
              </Tr>
            </Thead>
            <Tbody>
              {/*
              <Tr>
                <Td>Accuracy Score</Td>
                <Td>{AccuracyScore}</Td>
              </Tr>
        */}
              <Tr>
                <Td>Score</Td>
                <Td>{Math.round(Confidence * 100)}</Td>
              </Tr>
              {/* <Tr>
                <Td>Completeness</Td>
                <Td>{CompletenessScore}</Td>
              </Tr>
              <Tr>
                <Td>Pronounciation Score</Td>
                <Td>{PronScore}</Td>
              </Tr> */}
            </Tbody>
          </Table>
        </Modal>
      </div>
    </>
  );
}
const Pronounce = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);
  // console.log(auth.token);
  const [showModal, setShowModal] = useState(false);
  const [url, setUrl] = useState();
  const [request, setRequest] = useState(false);
  const [score, setScore] = useState(0);
  const [data, setData] = useState(null);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();
  const urlHandler = useCallback((url) => {
    console.log(url);
    setUrl(url);
  }, []);

  const audioSubmitHandler = async () => {
    let file;
    await fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        file = new File([blob], "file.wav", { type: "audio/wav" });
      });

    try {
      // const reference = "YB";
      var formData = new FormData();
      formData.append("audio", file);
      formData.append(
        "text",
        "This is a pronunciation test specially for dyslexic students. The main focus of this test is to improve the reading skills. This is one of the four tests that are conducted in this site"
      );
      // formData.append("DisplayText",);
      const responseData = await sendRequest(
        "http://localhost:8000/read/",
        "POST",
        formData
      );
      console.log(responseData);
      setData(responseData.NBest[0]);
      // setScore(responseData.score);
      // score = responseData.score;
    } catch (err) {}
    setRequest(true);
  };
  return (
    <div>
      {request && <ResultPage data={data} />}
      {isLoading && <LoadingSpinner asOverlay />}
      <ErrorModal error={error} onClear={clearError} />
      <Card
        className="recording-card"
        variant="outlined"
        sx={{ minWidth: 305 }}
      >
        <div className="card-div">
          <div className="content-word">
            <div className="word-guess">
              <div className="dynamic-names">
                {words.map((word) => (
                  <div>
                    <ul>
                      <li>{word}</li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="audio-style">
            <Audio handleUrl={urlHandler} loadingHandler={isLoading} />
          </div>
          <div className="btn-style">
            {!isLoading && (
              <Button disabled={!url} onClick={audioSubmitHandler}>
                Submit
              </Button>
            )}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Pronounce;
