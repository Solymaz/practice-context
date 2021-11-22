import React from "react";
import { useTheme, useTheamUpdate } from "./ThemeContext";

export default function ContextComponent() {
  const darkTheme = useTheme();
  const toggleTheme = useTheamUpdate();
  const themeStyles = {
    backgroundColor: darkTheme ? "#333 " : "#ccc",
    color: darkTheme ? "#ccc" : "#333",
    padding: "2rem",
    margin: "2rem",
  };
  return (
    <>
      <button onClick={toggleTheme}>Change Theme</button>
      <div style={themeStyles}>Theme</div>
    </>
  );
}
