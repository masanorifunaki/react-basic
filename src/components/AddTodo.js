import React from 'react';

export class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    // input の内容のための state
    this.state = { title: '' };
  }

  render() {
    return (
      <div>
        <h2>AddTodo</h2>
        <form onSubmit={ this.handleSubmit }>
          <input type="text" value={ this.state.title } onChange={ this.handleChange }/>
          <input type="submit" value='Add'/>
        </form>
      </div>
    );
  }

  handleChange = event => {
    const title = event.target.value;
    this.setState({ title: title });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  };
}