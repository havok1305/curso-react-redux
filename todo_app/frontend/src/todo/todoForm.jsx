import React from 'react';
import Grid from '../template/grid';
import IconButton from '../template/iconButton';

export default props => {
    const keyHandler = (e) => {
        if (e.key === 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd();
        } else if (e.key === 'Escape') {
            props.handleClear();
        }
    }
    return (
        <div role="form" className="todoForm">
            <Grid cols="12 9 10" >
                <input
                    type="text"
                    id="description"
                    className="form-control"
                    placeholder="Add a task"
                    value={props.description}
                    onKeyUp={keyHandler}
                    onChange={props.handleChange}
                >
                </input>
            </Grid>
            <Grid cols="12 3 2" >
                <IconButton onClick={props.handleAdd} icon="plus" style="primary" />
                <IconButton onClick={props.handleSearch} icon="search" style="info" />
                <IconButton onClick={props.handleClear} icon="close" style="default" />
            </Grid>
        </div>
    );
};
