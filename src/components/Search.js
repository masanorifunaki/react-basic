import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: '' };
  }

  render() {
    const { buttonText } = this.props;
    return (
      <div>
        <form onSubmit={ this.handleSubmit }>
          <input value={ this.state.title } onChange={ this.handleChange }/>
          <input type="submit" value={ buttonText }/>
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
    const { getUrls } = this.props;
    getUrls(this.state.title);
    this.setState({ title: '' });
  };
}

export default Search;
