import React, { useEffect, useRef, useState } from "react";
import CanvasJSReact from "../../canvasjs.react";
import QuizCard from "../components/QuizCard";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useContext } from "react";
import { AuthContext } from "../../shared/context/auth-context";
import Modal from "../../shared/components/UIElements/Modal";
import { useHttpClient } from "../../shared/hooks/http-hook";

import "./Quizzes.css";
import Button from "../../shared/components/FormElements/Button";
import Modaal from "../../shared/components/UIElements/Modaal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
let rapid = [];
let read = [];
let object = [];
let write = [];
const AllScore = (props) => {
  const [rapidArray, setRapidArray] = useState([]);

  const rapidRef = useRef(rapidArray);
  const [stat, setStat] = useState(false);
  const [readingArray, setReadingArray] = useState([]);
  const readRef = useRef(readingArray);
  const [objectArray, setObjectArray] = useState([]);
  const objectRef = useRef(objectArray);
  const [writeArray, setWriteArray] = useState([]);
  const auth = useContext(AuthContext);
  const history = useHistory();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  useEffect(() => {
    const submitHandler = async () => {
      console.log("Sending request3");
      try {
        const responseData = await sendRequest(
          "http://localhost:8000/score/?type=Reading%20Comprehension%20Test",
          "GET",
          null,
          {
            "Content-type": "application/json",
            Authorization: "Token " + auth.token,
          }
        );
        // console.log(responseData);
        setReadingArray(responseData);

        // console.log(responseData.NBest[0]);
        // auth.login(responseData.userId, responseData.token);
      } catch (err) {
        console.log(err);
      }
    };
    submitHandler();
  }, [sendRequest, auth.token]);
  useEffect(() => {
    const submitHandler = async () => {
      console.log("Sending request1");
      try {
        const responseData = await sendRequest(
          "http://localhost:8000/score/?type=Object%20Classification%20Test",
          "GET",
          null,
          {
            "Content-type": "application/json",
            Authorization: "Token " + auth.token,
          }
        );
        // console.log(responseData);
        setObjectArray(responseData);
        // setStat(true);

        // console.log(responseData.NBest[0]);
        // auth.login(responseData.userId, responseData.token);
      } catch (err) {
        console.log(err);
      }
      console.log("Sending request2");
    };

    submitHandler();
  }, [sendRequest, auth.token]);
  useEffect(() => {
    const submitHandler = async () => {
      try {
        const responseData = await sendRequest(
          "http://localhost:8000/score/?type=Rapid%20Color%20Naming",
          "GET",
          null,
          {
            "Content-type": "application/json",
            Authorization: "Token " + auth.token,
          }
        );
        // console.log(responseData);
        setRapidArray(responseData);
        // setStat(true);
        // responseData.map((item) =>
        //   setReadingArray(
        //     readingArray.push({ label: item.timestamp, y: item.score })
        //   )
        // );

        // console.log(responseData.NBest[0]);
        // auth.login(responseData.userId, responseData.token);
      } catch (err) {
        console.log(err);
      }
      console.log("Sending request2");
    };

    submitHandler();
  }, [sendRequest, auth.token]);
  useEffect(() => {
    const submitHandler = async () => {
      try {
        const responseData = await sendRequest(
          "http://localhost:8000/score/?type=Rapid%20Color%20Naming",
          "GET",
          null,
          {
            "Content-type": "application/json",
            Authorization: "Token " + auth.token,
          }
        );
        // console.log(responseData);
        setRapidArray(responseData);
        // setStat(true);
        // responseData.map((item) =>
        //   setReadingArray(
        //     readingArray.push({ label: item.timestamp, y: item.score })
        //   )
        // );

        // console.log(responseData.NBest[0]);
        // auth.login(responseData.userId, responseData.token);
      } catch (err) {
        console.log(err);
      }
      console.log("Sending request2");
    };

    submitHandler();
  }, [sendRequest, auth.token]);
  useEffect(() => {
    const submitHandler = async () => {
      try {
        const responseData = await sendRequest(
          "http://localhost:8000/score/?type=Rapid%20Color%20Naming",
          "GET",
          null,
          {
            "Content-type": "application/json",
            Authorization: "Token " + auth.token,
          }
        );
        // console.log(responseData);
        setRapidArray(responseData);
        // setStat(true);
        // responseData.map((item) =>
        //   setReadingArray(
        //     readingArray.push({ label: item.timestamp, y: item.score })
        //   )
        // );

        // console.log(responseData.NBest[0]);
        // auth.login(responseData.userId, responseData.token);
      } catch (err) {
        console.log(err);
      }
      console.log("Sending request2");
    };

    submitHandler();
  }, [sendRequest, auth.token]);

  useEffect(() => {
    rapidRef.current = rapidArray.map((item) => ({
      label: new Date(item.timestamp).getMinutes(),
      y: item.score,
    }));
    readRef.current = readingArray.map((item) => ({
      label: new Date(item.timestamp).getMinutes(),
      y: item.score,
    }));
    objectRef.current = objectArray.map((item) => ({
      label: new Date(item.timestamp).getMinutes(),
      y: item.score,
    }));
  }, [rapidArray, readingArray, objectArray]);
  // useEffect(() => {
  //   read = readingArray.map((item) => ({
  //     label: new Date(item.timestamp).getMinutes(),
  //     y: item.score,
  //   }));

  // }, [readingArray]);
  // useEffect(() => {
  //   object = objectArray.map((item) => ({
  //     label: new Date(item.timestamp).getMinutes(),
  //     y: item.score,
  //   }));
  //   rapid.forEach((item) => {});
  // }, [objectArray]);
  const options = {
    title: {
      text: "Object Classification Test",
    },

    data: [
      {
        type: "column",
        dataPoints: objectRef.current,
        // dataPoints: [
        //   { label: "Apple", y: 10 },
        //   { label: "Orange", y: 15 },
        //   { label: "Banana", y: 25 },
        //   { label: "Mango", y: 30 },
        //   { label: "Grape", y: 28 },
        // ],
      },
    ],
  };
  const options2 = {
    title: {
      text: "Pronunciation Test",
    },

    data: [
      {
        type: "column",
        dataPoints: readRef.current,
      },
    ],
  };
  const options3 = {
    title: {
      text: "Rapid Color Naming Test",
    },

    data: [
      {
        type: "column",
        dataPoints: rapidRef.current,
      },
    ],
  };
  const options4 = {
    title: {
      text: "Handwriting Test",
    },

    data: [
      {
        type: "column",
        dataPoints: [
          { label: "15", y: 10 },
          { label: "21", y: 45 },
          { label: "40", y: 25 },
          { label: "58", y: 80 },
        ],
      },
    ],
  };
  return (
    <>
      {console.log(rapid)}
      <div className="chart-display">
        {isLoading && <LoadingSpinner asOverlay />}
        {/* <Button onClick={submitHandler}>Fetch Scores</Button> */}

        <CanvasJSChart
          options={options}
          /* onRef={ref => this.chart = ref} */
        />

        <CanvasJSChart options={options2} />
      </div>
      {/* <Button onClick={submitHandler}>Fetch Scores</Button> */}
      <div className="chart-display">
        <CanvasJSChart options={options3} />
        <CanvasJSChart options={options4} />
      </div>
    </>
  );
};

const Quizzes = () => {
  //   <QuizCard />;
  const [showModal, setShowModal] = useState(false);
  const modalHandler = () => {
    setShowModal(true);
  };
  const clearModal = () => {
    setShowModal(null);
  };
  return (
    // <div className="left">
    <>
      <Modaal
        onCancel={clearModal}
        header="Your Result"
        show={showModal}
        // maximum={true}
        // addButton={true}
        // footer={
        // <Button onClick={() => history.push("/")}>All Quizzes</Button>}
      >
        <AllScore value={true} />
      </Modaal>
      <div className="container">
        <div className="left-container">
          <QuizCard />
        </div>

        <div className="right-container">
          {/* <div className="dashed-lines"></div> */}
          {/* <Button type="submit"></Button> */}
          <div className="butt">
            <Button
              color="secondary"
              className="btn"
              variant="outlined"
              onClick={modalHandler}
            >
              View Previous Results
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Quizzes;
