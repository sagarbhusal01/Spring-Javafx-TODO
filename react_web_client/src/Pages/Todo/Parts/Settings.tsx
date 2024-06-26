import React, { useState } from "react";
import "../../../Styles/Todo/TodoStyles.css";
import { GetLocalURL } from "../Functions/LocalURL";
export default function Settings(props: any) {
  const [Toggle, setToggle] = useState<boolean>(false);
  const [IP, setIP] = useState<string>("");

  // ==================================
  const HandleEscapeKey = (e: any) => {
    if (e.keyCode === 27) {
      setToggle(false);
    }
  };
  // ==================================

  return (
    <>
      <button
        id="SettingButton"
        onClick={() => {
          setToggle(true);
        }}
      >
        <img
          src={require("../../../assets/Settings.png")}
          alt="Setting Button"
          id="SettingImage"
        />
      </button>

      {Toggle && (
        <div id="Overlay">
          <div
            id="OverlayContainer"
            onKeyDown={(e) => {
              HandleEscapeKey(e);
            }}
          >
            <input
              type="text"
              id="SettingInput"
              placeholder={GetLocalURL()}
              onChange={(e) => {
                setIP(e.target.value);
              }}
            />
            <button
              id="SettingAddButton"
              onClick={() => {
                if (IP) {
                  props.HandleSetting(IP);
                  setToggle(false);
                }
              }}
            >
              Add
            </button>
          </div>
        </div>
      )}
    </>
  );
}
