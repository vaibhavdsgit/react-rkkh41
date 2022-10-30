import React from "react";
import "./style.css";

import UseCallbackDemo from './components/UseCallbackDemo'
import UseMemoDemo from './components/UseMemoDemo'

export default function App() {
  return (
    <>
      <h1>Hello StackBlitz!</h1>
      {/* <UseCallbackDemo /> */}
      <UseMemoDemo />
    </>
  );
}
