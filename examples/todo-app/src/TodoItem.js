import React from "react";
import { useObserveOnKey } from "react-transient-data-provider";

const TodosItem = () => {
    const todo = useObserveOnKey("todo");

    return (
        <React.Fragment>
            {todo}
        </React.Fragment>
    )
}

export default TodosItem;
