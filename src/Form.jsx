import React from "react";
import { useState } from "react";
import TextField from "@material-ui/core/TextField";

const Form = ({ addTodo }) => {
  // ここでStateを管理するのはよろしくない？
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    // これがないと面白いことが起こる
    e.preventDefault();
    // 空で追加しないように
    if (value !== "") {
      addTodo(value);
      setValue("");
    } else {
      // 空のときはアラート
      alert("やることを入力してください！");
    }
    // 過去はこんな原始的な方法でinputを空にしてました
    // TextFieldの中のinputタグをしっかりと選択しよう！
    // for (let i = 0; i < 12; i++) {
    //   let input = document.getElementsByTagName("input")[i];
    //   input.value = "";
    // }
  };
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        // className="input"
        id="standard-basic"
        label="なにするの？"
        // これ重要
        onChange={(e) => {
          setValue(e.target.value);
        }}
        // setStateと結びつける
        value={value}
      />
    </form>
  );
};

export default Form;
