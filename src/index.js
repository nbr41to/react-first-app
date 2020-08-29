import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx"

ReactDOM.render(<App />, document.getElementById("root"));

// メモ
// ReactAppは最後はAppに一つにまとめてrenderしましょうよという慣習がある
// 拡張子は,Componentの拡張子は.jsxとしたほうが,VSCodeのJSX内の補完が適応される
// index.jsだけは区別しやすいので.jsのままにしてみた（※この拡張子変えると,yarn startをし直さないといけない）