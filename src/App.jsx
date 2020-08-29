import React from "react";
import TodoApp from "./TodoApp.jsx";
import { Grid } from "@material-ui/core";

// 外部系
// import Typography from "@material-ui/core/Typography";

const App = () => {
  const colors = ["skyblue", "lightgreen", "tomato", "orange"];
  // そのうち追加ボタンでリストをランダムのカラーで追加とかしたいね
  // ここではGridの練習をしてみる
  // Gridよき ようはFlexboxだね
  // itemをmapで並べてみた
  return (
    <React.Fragment>
      <Grid
        container
        spacing={3}
        direction="row"
        justify="center"
        alignItems="start"
      >
        {/* <Grid item>
          <TodoApp bgcolor="skyblue" />
        </Grid>
        <Grid item>
          <TodoApp bgcolor="lightgreen" />
        </Grid>
        <Grid item>
          <TodoApp bgcolor="tomato" />
        </Grid> */}
        {colors.map((color, index) => {
          return (
            <Grid item>
              <TodoApp bgcolor={color} num={1 + index} />
            </Grid>
          );
        })}
      </Grid>
    </React.Fragment>
  );
};

export default App;
