import "./App.css";
import Timer from "./Timer";
import Settings from "./Settings";
import { useState, useEffect, useRef } from "react";
import SettingsContext from "./SettingsContext";
import DarkModeButton from "./DarkModeButton";
import LightModeButton from "./LightModeButton";



function App() {
  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);

  
  const light = "#efe6d5";
  const dark = "#253834";
  const [setDark, setToDarkMode] = useState(light)
  
  const [setLight, setToLightMode] = useState(true)

  const setLightRef = useRef(setToLightMode);

  const click = setDark => {
    setToDarkMode(setDark)
  }

  useEffect(() => {
    document.body.style.backgroundColor = setDark
  }, [setDark])
  

  
  return (
    <main>
      
      <text className="app-title topleft">Pomodoro.</text>

      <div>
      {setLight ? (
      <DarkModeButton onClick = {() => {
      click(dark);
      setToLightMode(false);
      setLightRef.current = false;}}
      />
      ) : (
    < LightModeButton onClick = {() => {
      click(light);
      setToLightMode(true);
      setLightRef.current = true;}}
      />
      )}
      </div>
      
      <SettingsContext.Provider
        value={{
          showSettings,
          setShowSettings,
          workMinutes,
          breakMinutes,
          setWorkMinutes,
          setBreakMinutes,
        }}
      >
        {showSettings ? <Settings /> : <Timer />}
      </SettingsContext.Provider>
    </main>
  );
}

export default App;
