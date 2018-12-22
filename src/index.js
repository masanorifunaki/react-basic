import React              from 'react';
import ReactDOM           from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { TodoApp }        from './TodoApp';

ReactDOM.render(
  <TodoApp/>
  , document.getElementById('root')
);

serviceWorker.unregister();
