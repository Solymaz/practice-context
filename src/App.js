import React from "react";
import { ThemeProvider } from "./ThemeContext";
import ContextComponent from "./ContextComponent";

export default function App() {
  return (
    <ThemeProvider>
      <ContextComponent />
    </ThemeProvider>
  );
}
