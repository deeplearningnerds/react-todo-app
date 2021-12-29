import React from 'react';
import {Link} from "react-router-dom";

const ListItem = ({todo}) => {
    return (
        <Link to={`/todo/${todo.id}`}>
            <div className={"todos-list-item"}>
                <h3>{todo.body}</h3>
            </div>
        </Link>
    );
};

export default ListItem;