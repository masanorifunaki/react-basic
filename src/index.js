import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// import ClassComponent1 from './ClassComponent1';
// import ClassComponent2 from './ClassComponent2';
// import { ClassComponent3 } from './ClassComponent3';

// import { var1, function1, ReactComponent } from './module';
//
// console.log(var1);
// function1();
//
// const ReturnReactElement = props => {
//   return (
//     <h2>
//       {props.name} {props.music}
//     </h2>
//   );
// };

class Human extends React.Component {
  constructor(props) {
    // extends した元のクラスの性質を受け継ぎつつ、props も受け取る
    super(props);
    // 必ずオブジェクトを与えること
    this.state = { name: 'Yamada'};
  }

  // render は必須
  render() {
    return (
      <h2 onClick={this.onButtonClick}>
        {/*// state は内部の値 // props は外部から受け取った値*/}
        {this.state.name} {this.props.age}
      </h2>
    );
  }
  // JSX のコールバックに指定された場合には
  // ()=> という形で書き、this を意図した挙動にさせること
  onButtonClick = () => {
    // setState で state を変更する
    // setState にはオブジェクトを渡す
    // React.Component を extends (継承)した際に受け継がれたもの。
    this.setState({ name: this.state.name + 'san!' });
  }
}


ReactDOM.render(
  <Human age='30'/>
  , document.getElementById('root')
);

serviceWorker.unregister();
