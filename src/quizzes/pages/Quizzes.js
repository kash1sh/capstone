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
// let rapid = [];
// let read = [];
// let object = [];
// let write = [];
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
      // console.log("Sending request3");
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
      // console.log("Sending request1");
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
      // console.log("Sending request2");
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
      // console.log("Sending request2");
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
      // console.log("Sending request2");
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
      // console.log("Sending request2");
    };

    submitHandler();
  }, [sendRequest, auth.token]);

  useEffect(() => {
    rapidRef.current = rapidArray.map((item, index) => ({
      label: index + 1,
      y: item.score,
    }));
    readRef.current = readingArray.map((item, index) => ({
      label: index + 1,
      y: item.score,
    }));
    objectRef.current = objectArray.map((item, index) => ({
      label: index + 1,
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
    theme: "dark1",
    dataPointWidth: 65,
    title: {
      text: "Object Classification Test",
    },
    axisY: {
      title: "Score",
    },
    axisX: {
      title: "Attempt Number",
    },

    data: [
      {
        type: "column",
        dataPoints: objectRef.current,
        // dataPoints: [
        //   { label: "1", y: 10 },
        //   { label: "2", y: 35 },
        //   { label: "3", y: 50 },
        //   { label: "4", y: 55 },
        //   { label: "5", y: 45 },
        //   { label: "6", y: 85 },
        // ],
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
    theme: "dark1",
    dataPointWidth: 65,
    title: {
      text: "Pronunciation Test",
    },
    axisY: {
      title: "Score",
    },
    axisX: {
      title: "Attempt Number",
    },

    data: [
      {
        type: "column",
        dataPoints: readRef.current,
        // dataPoints: [
        //   { label: "1", y: 40 },
        //   { label: "2", y: 15 },
        //   { label: "3", y: 65 },
        //   { label: "4", y: 88 },
        //   { label: "5", y: 93 },
        //   { label: "6", y: 65 },
        // ],
      },
    ],
  };
  const options3 = {
    theme: "dark1",
    dataPointWidth: 65,
    title: {
      text: "Rapid Color Naming Test",
    },
    axisY: {
      title: "Score",
    },
    axisX: {
      title: "Attempt Number",
    },

    data: [
      {
        type: "column",
        dataPoints: rapidRef.current,
        // dataPoints: [
        //   { label: "1", y: 10 },
        //   { label: "2", y: 45 },
        //   { label: "3", y: 65 },
        //   { label: "4", y: 50 },
        //   { label: "5", y: 80 },
        //   { label: "6", y: 92 },
        // ],
      },
    ],
  };
  const options4 = {
    theme: "dark1",
    dataPointWidth: 65,
    title: {
      text: "Handwriting Test",
    },
    axisY: {
      title: "Score",
    },
    axisX: {
      title: "Attempt Number",
    },

    data: [
      {
        type: "column",

        // dataPoints: [
        //   { label: "1", y: 10 },
        //   { label: "2", y: 45 },
        //   { label: "3", y: 25 },
        //   { label: "4", y: 80 },
        // ],
        dataPoints: [
          { label: "1", y: 10 },
          { label: "2", y: 45 },
          { label: "3", y: 25 },
          { label: "4", y: 80 },
          { label: "5", y: 50 },
          { label: "6", y: 90 },
        ],
      },
    ],
  };
  return (
    <>
      {/* {console.log(rapid)} */}
      <div className="chart-display">
        {isLoading && <LoadingSpinner asOverlay />}
        {/* <Button onClick={submitHandler}>Fetch Scores</Button> */}
        <CanvasJSChart options={options4} />

        <CanvasJSChart options={options2} />
      </div>
      {/* <Button onClick={submitHandler}>Fetch Scores</Button> */}
      <div className="chart-display">
        <CanvasJSChart options={options3} />
        <CanvasJSChart
          options={options}
          /* onRef={ref => this.chart = ref} */
        />
      </div>
    </>
  );
};
const LineScore = (props) => {
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
      // console.log("Sending request3");
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
      // console.log("Sending request1");
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
      // console.log("Sending request2");
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
      // console.log("Sending request2");
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
      // console.log("Sending request2");
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
      // console.log("Sending request2");
    };

    submitHandler();
  }, [sendRequest, auth.token]);

  useEffect(() => {
    rapidRef.current = rapidArray.map((item, index) => ({
      label: index + 1,
      y: item.score,
    }));
    readRef.current = readingArray.map((item, index) => ({
      label: index + 1,
      y: item.score,
    }));
    objectRef.current = objectArray.map((item, index) => ({
      label: index + 1,
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
    animationEnabled: true,
    exportEnabled: true,
    theme: "dark1",
    title: {
      text: "Object Classification Test",
    },
    axisY: {
      title: "Score",
      suffix: "%",
    },
    axisX: {
      title: "Attempt Number",
      // prefix: "W",
      interval: 1,
    },

    data: [
      {
        type: "line",
        toolTipContent: "Attempt {x}: {y}%",
        dataPoints: objectRef.current,
        // dataPoints: [
        //   { label: "1", y: 10 },
        //   { label: "2", y: 35 },
        //   { label: "3", y: 50 },
        //   { label: "4", y: 55 },
        //   { label: "5", y: 45 },
        //   { label: "6", y: 85 },
        // ],
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
    animationEnabled: true,
    exportEnabled: true,
    theme: "dark1",
    title: {
      text: "Pronunciation Test",
    },
    axisY: {
      title: "Score",
      suffix: "%",
    },
    axisX: {
      title: "Attempt Number",
      // prefix: "W",
      interval: 1,
    },

    data: [
      {
        type: "line",
        toolTipContent: "Attempt {x}: {y}%",
        dataPoints: readRef.current,
        // dataPoints: [
        //   { label: "1", y: 40 },
        //   { label: "2", y: 15 },
        //   { label: "3", y: 65 },
        //   { label: "4", y: 88 },
        //   { label: "5", y: 93 },
        //   { label: "6", y: 65 },
        // ],
      },
    ],
  };
  const options3 = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "dark1",
    title: {
      text: "Rapid Color Naming Test",
    },
    axisY: {
      title: "Score",
      suffix: "%",
    },
    axisX: {
      title: "Attempt Number",
      // prefix: "W",
      interval: 1,
    },

    data: [
      {
        type: "line",
        toolTipContent: "Attempt {x}: {y}%",
        dataPoints: rapidRef.current,
        // dataPoints: [
        //   { label: "1", y: 10 },
        //   { label: "2", y: 45 },
        //   { label: "3", y: 65 },
        //   { label: "4", y: 50 },
        //   { label: "5", y: 80 },
        //   { label: "6", y: 92 },
        // ],
      },
    ],
  };
  const options4 = {
    animationEnabled: true,
    exportEnabled: true,
    theme: "dark1",
    title: {
      text: "HandWriting Test",
    },
    axisY: {
      title: "Score",
      suffix: "%",
    },
    axisX: {
      title: "Attempt Number",
      // prefix: "W",
      interval: 1,
    },

    data: [
      {
        type: "line",
        toolTipContent: "Attempt {x}: {y}%",
        dataPoints: [
          { label: "1", y: 10 },
          { label: "2", y: 45 },
          { label: "3", y: 25 },
          { label: "4", y: 80 },
          { label: "5", y: 50 },
          { label: "6", y: 90 },
        ],
      },
    ],
  };
  return (
    <>
      {/* {console.log(rapid)} */}
      <div className="chart-display">
        {isLoading && <LoadingSpinner asOverlay />}
        {/* <Button onClick={submitHandler}>Fetch Scores</Button> */}

        <CanvasJSChart options={options4} />

        <CanvasJSChart options={options2} />
      </div>
      {/* <Button onClick={submitHandler}>Fetch Scores</Button> */}
      <div className="chart-display">
        <CanvasJSChart options={options3} />
        <CanvasJSChart
          options={options}
          /* onRef={ref => this.chart = ref} */
        />
      </div>
    </>
  );
};

const Quizzes = () => {
  //   <QuizCard />;
  const [graph, setGraph] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const modalHandler = () => {
    setShowModal(true);
  };
  const clearModal = () => {
    setShowModal(null);
  };
  const lineHandler = () => {
    if (graph) setGraph(false);
    else setGraph(true);
  };
  return (
    // <div className="left">

    <>
      {console.log(graph)}
      <Modaal
        onCancel={clearModal}
        header={
          <div className="modaal-head">
            Your Result
            <div className="btn-header">
              <Button onClick={lineHandler}>Switch Chart</Button>
            </div>
          </div>
        }
        show={showModal}
        // maximum={true}
        // addButton={true}
        // footer={<Button onClick={() => setGraph(false)}>Line Chart</Button>}
      >
        {!graph && <AllScore value={true} />}
        {graph && <LineScore value={true} />}
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
