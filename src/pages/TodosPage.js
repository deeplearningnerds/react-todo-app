import React, {useState, useEffect} from 'react';
//import todos from "../assets/data";
import ListItem from "../components/ListItem";
import AddButton from "../components/AddButton";

const TodosPage = () => {

    let [todos, setTodos] = useState([])

    useEffect(() => {
        getTodos()
    }, [])

    let getTodos = async () => {
        let response = await fetch('http://localhost:5000/todos')
        let data = await response.json()

        setTodos(data)
    }

    return (
        <div className={"todos"}>
            <div className={"todos-header"}>
                <h2 className={"todos-title"}>&#9782;Todos</h2>
                <h2 className={"todos-title"}>{todos.length}</h2>
            </div>
            <div className={"todos-list"}>
                {todos.map((todo, index) => (
                    <ListItem key={index} todo={todo}/>
                ))}
            </div>
            <AddButton/>
        </div>
    );
};

export default TodosPage;