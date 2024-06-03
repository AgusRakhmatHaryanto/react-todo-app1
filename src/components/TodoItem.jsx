import React from "react";

const TodoItem = ({ todo }) => {
    return (
        <div>
            <p>{todo.title}</p>
        </div>
    );
};

export default TodoItem;