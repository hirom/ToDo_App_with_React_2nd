import React, { useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [imcompleteTodos, setImcompleteTodos] = useState([]);

  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...imcompleteTodos, todoText];
    setImcompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...imcompleteTodos];
    newTodos.splice(index, 1);
    setImcompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newImcompleteTodos = [...imcompleteTodos];
    newImcompleteTodos.splice(index, 1);
    setImcompleteTodos(newImcompleteTodos);

    const newCompleteTodos = [...completeTodos, imcompleteTodos[index]];
    setCompleteTodos(newCompleteTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    const target = newCompleteTodos[index];
    const newImcompleteTodos = [...imcompleteTodos, target];
    newCompleteTodos.splice(index, 1);
    setImcompleteTodos(newImcompleteTodos);
    setCompleteTodos(newCompleteTodos);
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
      <div className="imcompleted-area">
        <p className="title">未完了のTodo</p>
        <ul>
          {imcompleteTodos.map((todo, index) => {
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
      <div className="completed-area">
        <p className="title">完了のTodo</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div key={todo} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
    </>
  );
};
