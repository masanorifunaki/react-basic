import React              from 'react';
import axios              from 'axios';
import ReactDOM           from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Search }         from './components/Search';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { gifUrlList: [] };
  }

  static renderImageList(list) {
    const imageList = list.map(url => {
      return (
        <li key={ url } className='item'>
          <img src={ url } alt={ url } className='image'/>
        </li>
      );
    });

    return <ul className='list'>{ imageList }</ul>;
  }

  componentDidMount() {
    this.giphyApi();
  }

  render() {
    return (
      <div>
        <Search search={ this.giphyApi }/>
        { App.renderImageList(this.state.gifUrlList) }
      </div>);
  }

  giphyApi = target => {
    const search = target;
    const key    = 'key';
    const limit  = 10;
    const url    = `https://api.giphy.com/v1/gifs/search?q=${ search }&api_key=${ key }&limit=${ limit }`;

    axios.get(url).then(res => {
      const data = res.data.data;

      const imageUrlList = data.map(item => item.images.downsized.url);
      this.setState({ gifUrlList: imageUrlList });
    });
  };
}

ReactDOM.render(
  <App/>
  , document.getElementById('root')
);

serviceWorker.unregister();
