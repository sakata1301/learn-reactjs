import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import TodoList from './pages/ListPage/index';
import TodoItem from './pages/detailPage/index'

TodoFeature.propTypes = {

};

function TodoFeature(props) {
    //fake data of todoList
    const match=useRouteMatch();

    return (
        <div>
            <h3>Todo Router</h3>
            <Switch>
                <Route path={match.path} component={TodoList} exact/>
                <Route path={`${match.path}/:todoID`} component={TodoItem} exact/>
            </Switch>
        </div>
    );
}

export default TodoFeature;