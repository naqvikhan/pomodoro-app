import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PlayButton from "./PlayButton";
import PauseButton from "./PauseButton";
import SettingsButton from "./SettingsButton";
import { useContext, useState, useEffect, useRef } from "react";
import SettingsContext from "./SettingsContext";

function Timer() {
  const workColor = "#ef583e";
  const breakColor = "#9dbeb7";
  const workTrailColor = "#EFD1BE";
  const breakTrailColor = "#DADCCD";

  const settingsInfo = useContext(SettingsContext);

  const [isPaused, setIsPaused] = useState(true);
  const [mode, setMode] = useState("work"); //work/break/null
  const [secondsLeft, setSecondsLeft] = useState(0);

  const secondsLeftRef = useRef(secondsLeft);
  const isPausedRef = useRef(isPaused);
  const modeRef = useRef(mode);

  function tick() {
    secondsLeftRef.current--;
    setSecondsLeft(secondsLeftRef.current);
  }
//   function initTimer() {
//     setSecondsLeft(settingsInfo.workMinutes * 60);
//   }

  useEffect(() => {
    // initTimer();

    function switchMode() {
      const nextMode = modeRef.current === "work" ? "break" : "work";
      const nextSeconds =
        (nextMode === "work"
          ? settingsInfo.workMinutes
          : settingsInfo.breakMinutes) * 60;

      setMode(nextMode);
      modeRef.current = nextMode;

      setSecondsLeft(nextSeconds);
      secondsLeftRef.current = nextSeconds;
    }

    secondsLeftRef.current = settingsInfo.workMinutes * 60;
    setSecondsLeft(secondsLeftRef.current);

    const interval = setInterval(() => {
      if (isPausedRef.current) {
        return;
      }
      if (secondsLeftRef.current === 0) {
        return switchMode();
      }

      tick();
    }, 1000);

    return () => clearInterval(interval);


  },[settingsInfo]);

  const totalSeconds =
    mode === "work"
      ? settingsInfo.workMinutes * 60
      : settingsInfo.breakMinutes * 60;

  const percentage = Math.round((secondsLeft / totalSeconds) * 100);

  const minutes = Math.floor(secondsLeft / 60);
  let seconds = secondsLeft % 60;
  if (seconds < 10) seconds = "0" + seconds;

  return (
    <>
      

      <div>
        <CircularProgressbar
          strokeWidth={7.5}
          value={percentage}
          text={minutes + ":" + seconds}
          styles={buildStyles({
            rotation: 15,
            strokeLinecap: 0,
            textColor: mode === "work" ? workColor : breakColor,
            pathColor: mode === "work" ? workColor : breakColor,
            backgroundColor: "#ffffff",
            trailColor: mode === "work" ? workTrailColor : breakTrailColor,
          })}
        />

        <div style={{ marginTop: "20px" }}>
          {isPaused ? (
            <PlayButton
              onClick={() => {
                setIsPaused(false);
                isPausedRef.current = false;
              }}
            />
          ) : (
            <PauseButton
              onClick={() => {
                setIsPaused(true);
                isPausedRef.current = true;
              }}
            />
          )}

          <SettingsButton onClick={() => settingsInfo.setShowSettings(true)} />
        </div>
      </div>
    </>
  );
}

export default Timer;
