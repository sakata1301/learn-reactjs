import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from '../../components/TodoList/index'

ListPage.propTypes = {

};

function ListPage(props) {
    //fake data of todoList
    const initTodoList = [
        {
            id: 1,
            title: "Eat",
            status: "Object.values(numbers);"
        },
        {
            id: 2,
            title: "Sleep",
            status: "completed"
        },
        {
            id: 3,
            title: "Code",
            status: "new"
        }
    ];

    const [todoList, setTodoList] = useState(initTodoList);
    const [filterStatus, setFilterStatus] = useState('all');

    const handleTodoList = (todo, idx) => {
        console.log(todo + " " + idx);

        const newTodoList = [...todoList];

        const newTodo = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === "new" ? "completed" : "new"
        }

        newTodoList[idx] = newTodo;
        setTodoList(newTodoList);
    };

    const handleShowAll = () => {
        setFilterStatus('all');
    }

    const handleShowNew = () => {
        setFilterStatus('new');
    }

    const handleShowCompleted = () => {
        setFilterStatus('completed');
    }

    const renderTodoList=todoList.filter((todo)=> filterStatus==="all" || filterStatus===todo.status)

    return (
        <div>
            <h3>Todo List</h3>
            <TodoList todoList={renderTodoList} onTodoClick={handleTodoList} />

            <div>
                <button onClick={handleShowAll}>Show all</button>
                <button onClick={handleShowNew}>Show new</button>
                <button onClick={handleShowCompleted}>Show completed</button>
            </div>
        </div>
    );
}

export default ListPage;