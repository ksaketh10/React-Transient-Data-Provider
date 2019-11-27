import React from "react";
import { useSaveKey } from "react-transient-data-provider";

const CreateTodo = () => {
    const saveKey = useSaveKey();
    const [state, setState] = React.useState({ 'task': '' });

    const handleTaskChange = (e) => {
        setState({ task: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        saveKey("todo", state.task);
    }
    return (
        <form onSubmit={onSubmit}>
            <input type="text" onChange={handleTaskChange} placeholder="Task" autoFocus />
            <button>Add</button>
        </form>
    )
}

export default CreateTodo;