import { useState } from "react";
import Recorder from "voice-recorder-react";

// import RecorderUI from "./RecorderUI";
import RecorderHooks from "./RecorderHook";

export default function Audio() {
  const [isHooks, setHooks] = useState(false);
  const data = (url) => {
    console.log(url);
  };
  return (
    <>
      {/* <button onClick={() => setHooks(!isHooks)}> */}
      {/* {isHooks ? "Use Component" : "Use Hooks"} */}
      {/* </button> */}
      {/* <br />
      <br />
      <br /> */}
      {/* {isHooks ? ( */}
      <>
        <h3>Using Recorder with hooks</h3>
        <RecorderHooks fetchedUrl={data} />
      </>
      {/* ) : (
        <>
          <h3>Using Recorder with Recorder component</h3>
          <Recorder Render={RecorderUI} />
        </>
      ) */}
      {/* } */}
    </>
  );
}
