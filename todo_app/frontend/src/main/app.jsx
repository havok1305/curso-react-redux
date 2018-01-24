import 'modules/bootstrap/dist/css/bootstrap.min.css';
import 'modules/font-awesome/css/font-awesome.min.css';

import Todo from '../todo/todo';
import About from '../about/about';
import React from 'react';

export default props => (
    <div className='container'>
        <Todo />
        <About />
    </div>
);
