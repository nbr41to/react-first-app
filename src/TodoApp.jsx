import React from "react";
import { useState } from "react";
import Form from "./Form.jsx";
import List from "./List.jsx";
import shortid from "shortid";
import { Box } from "@material-ui/core";

// 外部系
// import Typography from "@material-ui/core/Typography";

const TodoApp = (props) => {
  const [todos, setTodos] = useState([
    { id: "a01", content: "やります", checked: false },
    { id: "b02", content: "やりました", checked: true },
  ]);
  // const [checked, setChecked] = React.useState(false);
  // タスクを追加する関数
  const addTodo = (content) => {
    setTodos([
      ...todos,
      {
        // content: content,
        // keyと中身が一緒の場合は省略可能
        content,
        // ユニークなIDを生成するshortidのメソッドを使用
        id: shortid.generate(),
      },
    ]);
  };

  // タスクを完了にする関数（開発中）
  const handleChange = (id) => {
    // setTodos(event.target.checked);
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.id = todo.id;
          todo.content = todo.content;
          todo.checked = !todo.checked;
        }
      })
    );
  };

  // タスクを削除する関数
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  // #ここではBoxの練習をしてみる
  // divで囲まれるようだ
  // 補完が素晴らしいが,""の中は当然補完されない
  // 技術がなくて複雑なCSSがかけない
  // 見づらい...
  return (
    <React.Fragment>
      <Box
        width="300px"
        display="flex"
        bgcolor={props.bgcolor}
        border="1px solid black"
        borderRadius="20px"
        justifyContent="center"
        flexDirection="column"
        p={2}
      >
        <Box
          // width="auto"
          fontSize="12px"
          color="info.contrastText"
          bgcolor="info.main"
          // 変数を使ってみた↑2つ
          borderRadius="10px"
          textAlign="center"
          // marginとpaddingのショートカット
          m={0}
          p={1}
        >
          <h1>はじめてのTodoApp{props.num}</h1>
        </Box>
        <Box p={3} mt={2} bgcolor="white" borderRadius="10px">
          <Form addTodo={addTodo} />
          <List
            todos={todos}
            deleteTodo={deleteTodo}
            handleChange={handleChange}
          />
        </Box>
      </Box>
    </React.Fragment>
  );
};

export default TodoApp;
