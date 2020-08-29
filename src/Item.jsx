import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  // セレクタとCSSでかける
  li: {
    margin: "7px 3px",
    backgroundColor: "#eee",
    borderRadius: "5px",
    boxShadow: "2px 2px 3px 1px #555",
    // themeを引数にしないとメディアクエリーは使えない
    [theme.breakpoints.down("xs")]: {
      color: "#444",
      backgroundColor: "pink",
    },
  },
}));

const Item = ({ content, id, deleteTodo }) => {
  // makeStylesを使ってみる
  const classes = useStyles();
  // TodoAppに行ってきます
  const [checked, setChecked] = React.useState(false);
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  // 開発中
  // const handleCheck = () => {
  //   handleChange(id);
  // };
  const handleDelete = () => {
    // e.preventDefault();
    deleteTodo(id);
  };
  return (
    <li className={classes.li}>
      <Checkbox checked={checked} onChange={handleChange} color="primary" />
      <span
        style={{
          textDecoration: checked ? "line-through" : "none",
          color: checked ? "gray" : "",
        }}
      >
        {content}
      </span>
      <IconButton aria-label="delete" onClick={handleDelete}>
        <DeleteIcon fontSize="small" />
      </IconButton>
    </li>
  );
};

export default Item;
