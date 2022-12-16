import { useRecorder } from "voice-recorder-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@mui/material";
import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";

// Recorder Hook component
export default function RecorderHooks(props) {
  const audioRef = useRef(null);
  const [hasRecording, setHasRecording] = useState(false);
  const { time, data, stop, start, pause, paused, resume, recording } =
    useRecorder();

  const togglePlay = () => {
    if (audioRef.current?.paused) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  };

  useEffect(() => {
    if (data.url && audioRef.current) {
      audioRef.current.src = data.url;
    }
    // console.log(data.url);
    // console.log(props.newUrl);
    props.fetchedUrl(data.url);
    if (props.newUrl) {
      stop();
    }
  }, [data.url, props, stop]);

  return (
    <>
      <Button
        type="button"
        onClick={() => {
          if (recording) {
            stop();
            setHasRecording(true);
          } else {
            start();
            setHasRecording(false);
          }
        }}
        style={{ marginTop: "-40px" }}
        variant="contained"
        startIcon={<MicIcon />}
      >
        {recording ? "Stop" : "Start"}
      </Button>

      {recording && (
        <>
          <Button
            type="button"
            onClick={() => {
              if (recording) {
                if (paused) resume();
                else pause();
              }
            }}
            style={{ marginTop: "-40px", marginLeft: "15px" }}
            variant="contained"
            startIcon={<MicOffIcon />}
          >
            {paused ? "Resume" : "Pause"}
          </Button>
          <p>
            {time.h}:{time.m}:{time.s}
          </p>
        </>
      )}

      {!recording && hasRecording && (
        <>
          <br />
          <br />
          {/* {console.log(audioRef)} */}
          <Button
            type="button"
            onClick={togglePlay}
            style={{ marginTop: "-150px", marginLeft: "115px" }}
            variant="contained"
          >
            Play/Pause
          </Button>
        </>
      )}

      <audio ref={audioRef} hidden />
    </>
  );
}
