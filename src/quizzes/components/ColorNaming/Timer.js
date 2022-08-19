// import React from "react";
// import { useTimer } from "react-timer-hook";

// function MyTimer({ expiryTimestamp }) {
//   const {
//     seconds,
//     minutes,
//     hours,
//     days,
//     isRunning,
//     start,
//     pause,
//     resume,
//     restart,
//   } = useTimer({
//     expiryTimestamp,
//     onExpire: () => console.warn("onExpire called"),
//   });

//   return (
//     <div style={{ textAlign: "center" }}>
//       <p>Timer</p>
//       <div style={{ fontSize: "100px" }}>
//         <span>{days}</span>:<span>{hours}</span>:<span>{minutes}</span>:
//         <span>{seconds}</span>
//       </div>
//       <p>{isRunning ? "Running" : "Not running"}</p>
//       <button onClick={start}>Start</button>
//       {/* <button onClick={pause}>Pause</button> */}
//       {/* <button onClick={resume}>Resume</button> */}
//       <button
//         onClick={() => {
//           // Restarts to 5 minutes timer
//           const time = new Date();
//           time.setSeconds(time.getSeconds() + 300);
//           restart(time);
//         }}
//       >
//         Restart
//       </button>
//     </div>
//   );
// }

// export default function Timer() {
//   const time = new Date();
//   time.setSeconds(time.getSeconds() + 600); // 10 minutes timer
//   return (
//     <div>
//       <MyTimer expiryTimestamp={time} />
//     </div>
//   );
// }
import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

import "./styles.css";

const zeroPad = (num, places) => String(num).padStart(places, "0");
const renderTime = (dimension, time) => {
  let v = time / 60;
  let val = v.toString();
  // val = "0" + val;
  let rem = time % 60;
  let num = parseInt(val);
  num = zeroPad(num, 2);
  if (rem < 10) {
    rem = "0" + rem;
  }
  return (
    <div className="time-wrapper">
      <div className="timeee">Remaining </div>
      <div className="time">
        {num} {"           "} {rem}
      </div>
      {/* <div className="timee">time minutes</div> */}
      {/* <div className="time">{time}</div> */}
      <div className="timee">
        <span>minutes</span> {"  "} {dimension}
      </div>
    </div>
  );
};

const timerProps = {
  isPlaying: true,
  size: 210,
  strokeWidth: 6,
};
const Timer = () => {
  // const remainingTime = 2;
  const history = useHistory();
  return (
    <div className="ini-time">
      <CountdownCircleTimer
        {...timerProps}
        strokeLinecap="square"
        duration={25}
        colors="#EF798A"
        // colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[40, 35, 20, 50]}
        trailColor="#d6d6d6"
        onComplete={() => {
          // do your stuff here
          // return { shouldRepeat: true, delay: 1.5 } // repeat animation in 1.5 seconds
          history.push("/");
        }}
      >
        {({ remainingTime, color }) => (
          <span style={{ color }}>{renderTime("seconds", remainingTime)}</span>
        )}
      </CountdownCircleTimer>
      {/* <CountdownCircleTimer
        isPlaying
        size={150}
        strokeWidth={7}
        strokeLinecap="square"
        duration={120}
        colors="#7E2E84"
        // colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[40, 35, 20, 50]}
        trailColor="#d6d6d6"
      >
        {({ remainingTime, color }) => (
          <span style={{ color }}>{renderTime("hours", 1)}</span>
        )}
      </CountdownCircleTimer> */}
    </div>
  );
};
export default Timer;
