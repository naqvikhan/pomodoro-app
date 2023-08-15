import ReactSlider from "react-slider";
import "./Slider.css";
import SettingsContext from "./SettingsContext";
import BackButton from "./BackButton";
import {useContext } from "react";


function Settings() {
  const settingsInfo = useContext(SettingsContext);


  

  return (
    <>


    <div style={{ textAlign: "left" }}>
      <h1 className="work">Work: {settingsInfo.workMinutes}:00</h1>
      <ReactSlider
        className={"sliderWork"}
        thumbClassName={"thumbWork"}
        trackClassName={"track"}
        value={settingsInfo.workMinutes}
        onChange={(newValue) => settingsInfo.setWorkMinutes(newValue)}
        min={1}
        max={120}
      />
      <h1 className="break">Break: {settingsInfo.breakMinutes}:00</h1>
      <ReactSlider
        className={"sliderBreak"}
        thumbClassName={"thumbBreak"}
        trackClassName={"track"}
        value={settingsInfo.breakMinutes}
        onChange={(newValue) => settingsInfo.setBreakMinutes(newValue)}
        min={1}
        max={120}
      />
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <BackButton onClick={() => settingsInfo.setShowSettings(false)} />
      </div>
    </div>
    </>
  );
}
export default Settings;
