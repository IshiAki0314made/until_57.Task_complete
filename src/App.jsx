import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, SetTodoText] = useState("");
  const [incompleteTodos, SetIncompleteTodos] = useState([
    "ああああ",
    "いいいい"
  ]);
  const [completeTodos, SetCompleteTodos] = useState(["ううううう"]);
  const onChangeTodoText = (event) => SetTodoText(event.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    SetIncompleteTodos(newTodos);
    SetIncompleteTodos("");
  };
  const onClickDelete = (index) => {
    const newTodos = { ...incompleteTodos };
    newTodos.splice(index, 1);
    SetIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = { ...incompleteTodos };
    newIncompleteTodos.splice(index, 1);

    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    SetIncompleteTodos(newCompleteTodos);
    SetcompleteTodos(SetIncompleteTodos);
  };

  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
