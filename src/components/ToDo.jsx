const ToDo = ({ todo }) => {

    const { id, title, completed } = todo;
    const h1 = <h1>{ title }</h1>
    const taskStatus = completed ? <strike>{ h1 }</strike> : h1;

    return (
        <div data-testid={ `todo-${ id }` }>{ taskStatus }</div>
    )
}

export default ToDo;