import React from 'react';
import todos from "../assets/data";
import ListItem from "../components/ListItem";

const TodosPage = () => {
    return (
        <div className={"todos"}>
            <div className={"todos-header"}>
                <h2 className={"todos-title"}>&#9782;Todos</h2>
                <p className={"todos-count"}>{todos.length}</p>
            </div>
            <div className={"todos-list"}>
                {todos.map((todo, index) => (
                    <ListItem key={index} todo={todo}/>
                ))}
            </div>
        </div>
    );
};

export default TodosPage;