import React    from 'react';
import ReactDOM from 'react-dom';
import emojify  from 'emojify.js';
import 'emojify.js/dist/css/sprites/emojify.css';

emojify.setConfig({
  mode: 'sprite'
});

export default class UserView extends React.Component {
  static propTypes = {
    children : React.PropTypes.element
  }

  componentDidMount () {
    emojify.run(ReactDOM.findDOMNode(this));
  }

  render () {
    return (
      this.props.children
    );
  }
}
