import React from "react";
import TodoItem from "./TodoItem";

const todos = ({ todos, toggleCompleted }) => {
  return (
    <div style={styles.container}>
      {todos.map((todo) => (
        <TodoItem
        key={todo.id}
        todo={todo}
        toggleCompleted={toggleCompleted}
        />
      ))}
    </div>
  );
};

const styles = {
  container: {
    width: "40%",
    margin: "0 auto",
  },
};

export default todos;
