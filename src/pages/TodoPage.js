import React, {useState, useEffect} from 'react';
//import todos from "../assets/data";
import {ReactComponent as ArrowLeft} from "../assets/arrow-left.svg";
import {useParams, Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";


const TodoPage = () => {
    let params = useParams();
    let todoId = params.id;

    let navigate = useNavigate();

    let [todo, setTodo] = useState(null)

    useEffect(() => {
        getTodo()
    }, [todoId])

    //let todo = todos.find(todo => todo.id == todoId)

    let getTodo = async () => {
        if (todoId === 'new') return
        let resonse = await fetch(`http://localhost:5000/todos/${todoId}`)
        let data = await resonse.json()
        setTodo(data)
    }

    let createTodo = async () => {
        await fetch(`http://localhost:5000/todos/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({...todo, 'updated': new Date()})

        })
    }

    let updateTodo = async () => {
        await fetch(`http://localhost:5000/todos/${todoId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({...todo, 'updated': new Date()})

        })
    }

    let deleteTodo = async () => {
        await fetch(`http://localhost:5000/todos/${todoId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo)
        })
        navigate("/", {replace: true})
    }

    let handleSubmit = () => {
        if (todoId !== 'new' && !todo.body) {
            deleteTodo()
        } else if (todoId !== 'new') {
            updateTodo()
        } else if (todoId === 'new' && todo !== null) {
            createTodo()
        }
        navigate("/", {replace: true})
    }

    return (
        <div className={"todo"}>
            <div className={"todo-header"}>
                <h3>
                    <Link to={"/"}>
                        <ArrowLeft onClick={handleSubmit}/>
                    </Link>
                </h3>
                {todoId !== 'new' ? (
                    <button onClick={deleteTodo}>Löschen</button>
                ) : (
                    <button onClick={handleSubmit}>Fertig</button>
                )}

            </div>
            <textarea
                onChange={(e) => {
                    setTodo({...todo, 'body': e.target.value})
                }}
                placeholder="Neues Todo"
                value={todo?.body}></textarea>
        </div>
    );
};

export default TodoPage;