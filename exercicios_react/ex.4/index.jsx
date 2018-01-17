import React from 'react';
import ReactDOM from 'react-dom';
import {Primeiro, Segundo} from './component';

ReactDOM.render(
  <div>
    <Primeiro value="First Component!!"/>
    <Segundo value="Second Component!!"/>
  </div>
  , document.getElementById('app'));

