import React from "react";
import { useSaveKey } from "react-transient-data-provider";

const CreateTodo = () => {
    const saveKey = useSaveKey();

    const onSubmit = (e) => {
        e.preventDefault();
        const todo = e.target.value;
        saveKey("todo", todo);
    }
    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="Task" ref="taskMessage" autoFocus />
            <button>Add</button>
        </form>
    )
}   

export default CreateTodo;