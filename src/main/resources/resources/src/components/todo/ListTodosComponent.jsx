import { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom";
import { deleteTodoApi, retrieveAllTodosForUsernameApi } from "./api/TodoApiService";
import { useAuth } from "./security/AuthContext";

function ListTodosComponent() {

    const today = new Date();

    const authContext = useAuth();

    const username = authContext.username;

    const navigate = useNavigate();

    const [todos, setTodos] = useState([]);

    const [message, setMessage] = useState(null);

    useEffect( () => refreshTodos(), [] );

    function refreshTodos() {
        retrieveAllTodosForUsernameApi('in28minutes')
        .then(response => {
            setTodos(response.data);
        })
        .catch(error => console.log(error));
    }

    function deleteTodo(id) {
        console.log("Delete Todo Clicked! " + id);
        deleteTodoApi('in28minutes', id)
        .then(
            //1. Display a message
            () => {
                setMessage(`Delete of todo with ID=${id} is successful`);
                refreshTodos();
            }
            //2. Update Todo List
        )
        .catch(error => console.log(error));
    }

    function updateTodo(id) {
        console.log("Update Todo Clicked! " + id);
        navigate(`/todo/${id}`);
    }

    function addNewTodo() {
        navigate(`/todo/-1`);
    }

    return (
        <div className='container'>
            <h1>Things You Want To Do!</h1>
            {message && <div className="alert alert-warning">{message}</div>}
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Is Done?</th>
                            <th>Target Date</th>
                            <th>Delete</th>
                            <th>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo => (
                                    <tr key={todo.id}>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        {/*<td>{todo.targetDate.toDateString()}</td>*/}
                                        {/*<td>{todo.targetDate.toString()}</td>*/}
                                        <td>{todo.targetDate}</td>
                                        <td>
                                            <button className="btn btn-warning" 
                                            onClick={() => deleteTodo(todo.id)}>Delete</button>
                                        </td>
                                        <td>
                                            <button className="btn btn-primary"
                                            onClick={() => updateTodo(todo.id)}>Update</button>
                                        </td>
                                    </tr>
                                )
                            )
                        }                        
                    </tbody>
                </table>
            </div>
            <div className="btn btn-success m-3"
            onClick={addNewTodo}>
                Add New Todo
            </div>
        </div>
    )
}

export default ListTodosComponent;