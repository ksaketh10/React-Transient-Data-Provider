import React from "react";
import { useObserveOnKey } from "react-transient-data-provider";

const TodosList = () => {
    const [state, setState] = React.useState([]);
    const todo = useObserveOnKey("todo");

    React.useEffect(() => {
        const prevState = state;
        prevState.push(todo)
        setState(prevState);
    });

    return (
        <ul>
            {state.map(todo => (
                <li>
                    {todo}
                </li>
            ))}

        </ul>
    )
}

export default TodosList;
