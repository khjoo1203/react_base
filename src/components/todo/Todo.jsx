import './style.css';


const Todo = ({todos, onRemove}) => {
    return (
        <div className="TodoList">
            {todos.map(todo => (
                <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} />
            ))}
        </div>
    );
};

const TodoListItem = ({todo, onRemove}) => {
    const {id, text, checked} = todo;
    return (
        <div className="TodoListItem">
            <div className={('checkbox', {checked})}>
                {checked? "v": ""}
                <div className="text">{text}</div>
            </div>
            <div className="remove" onClick={() => onRemove(id)}>지우기</div>
        </div>
    )
}




export default Todo;