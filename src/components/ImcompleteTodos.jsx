import React from "react";

export const ImcompleteTodos = (props) => {
  const { imcompleteTodos, onClickComplete, onClickDelete } = props;
  return (
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
  );
};
