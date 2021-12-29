import React from 'react';
import todos from "../assets/data";
import {ReactComponent as ArrowLeft} from "../assets/arrow-left.svg";
import {useParams, Link} from "react-router-dom";

const TodoPage = () => {
    let params = useParams();
    let todoId = Number(params.id);
    let todo = todos.find(todo => todo.id == todoId)
    return (
        <div className={"todo"}>
            <div className={"todo-header"}>
                <h3>
                    <Link to={"/"}>
                        <ArrowLeft/>
                    </Link>
                </h3>

            </div>
            <textarea value={todo?.body}></textarea>
        </div>
    );
};

export default TodoPage;