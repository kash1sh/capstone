import { useState } from "react";
import Recorder from "voice-recorder-react";

// import RecorderUI from "./RecorderUI";
import RecorderHooks from "./RecorderHook";

export default function Audio(props) {
  const [isHooks, setHooks] = useState(false);
  const data = (url) => {
    // if (props.generateUrl) {
    props.handleUrl(url);
    // }
    // console.log(url);
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
        {/* <h3>Using Recorder</h3> */}
        <RecorderHooks
          fetchedUrl={data}
          newUrl={props.generateUrl}
          showButton={props.loadingHandler}
        />
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
