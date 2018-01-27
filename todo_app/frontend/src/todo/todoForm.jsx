import React from 'react';
import Grid from '../template/grid';
import IconButton from '../template/iconButton';

export default props => (
    <div role="form" className="todoForm">
        <Grid cols="12 9 10" >
            <input
                type="text"
                id="description"
                className="form-control"
                placeholder="Add a task"
                value={props.description}
                onChange={props.handleChange}
            >
            </input>
        </Grid>
        <Grid cols="12 3 2" >
            <IconButton onClick={props.handleAdd} icon="plus" style="primary" />
        </Grid>
    </div>
);