import React from "react";
import Item from "./Item";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  // セレクタとCSSでかける
  ul: {
    listStyle: "none",
    padding: 0,
  },
});

const List = ({ todos, deleteTodo, handleChange }) => {
  // makeStylesを使う
  const classes = useStyles();
  return (
    <ul className={classes.ul}>
      {/*  mapを使うときはコンポーネントに識別ができるようにkeyを設定してあげましょう. */}
      {todos.map((todo, index) => {
        return (
          <Item
            content={todo.content}
            key={index}
            id={todo.id}
            deleteTodo={deleteTodo}
            // まだ渡してないよ
            // checked={todo.checked}
            // handleChange={handleChange}
          />
        );
      })}
    </ul>
  );
};

export default List;
