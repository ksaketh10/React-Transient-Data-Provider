This is a light weight data transfer library between components in react. It works exactly like redux but with all the boiler plate code taken out.

In your project directory, you can install npm:

### `npm i react-transient-provider`

Usage

Here is a simple todo app example on how to use useSaveKey and useObserveOnKey react hooks to tranfer dataa between components

First save the data you want to save with useSaveKey hook like below;

### `
###const CreateTodo = () => {
### const saveKey = useSaveKey();
### const [state, setState] = React.useState({ 'task': '' });

### const handleTaskChange = (e) => {
###     setState({ task: e.target.value });
### };

### const onSubmit = (e) => {
###     e.preventDefault();
###     saveKey("todo", state.task);
###}
###return (
### <form onSubmit={onSubmit}>
### <input type="text" onChange={handleTaskChange} placeholder="Task" autoFocus />
### <button>Add</button>
###</form>
###)
###}`

And retrieve the key value in other component using useObserveOnKey hook

###`
###const TodosItem = () => {
###    const todo = useObserveOnKey("todo");
###    return (
###        <React.Fragment>
###            {todo}
###        </React.Fragment>
###    )
###}
`

