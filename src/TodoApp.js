import React       from 'react';
import { AddTodo } from './components/AddTodo';
import { List }    from './components/List';

export class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos : [],
      nextId: 0
    };
  }

  render() {
    return (
      <div>
        <h2>TodoApp</h2>
        <AddTodo addTodo={ this.addTodo }/>
        <List deleteTodo={ this.deleteTodo } todos={ this.state.todos }/>
      </div>
    );
  }

  // 新しい配列を作成するシンタックス
  // 配列に、オブジェクトを追加し、新規配列を作成する
  // [...配列, {新しく追加したいオブジェクト}]

  addTodo = title => {
    this.setState({
      todos : [...this.state.todos, { id: this.state.nextId + 1, title: title }],
      nextId: this.state.nextId + 1
    });
  };

  deleteTodo = id => {
    this.setState({
      todos: this.state.todos.filter(todo => {
        return todo.id !== id;
      })
    });
  };
}