import React from 'react';
import Icon from 'react-fa'

import 'styles/app.scss';

export default class CoreLayout extends React.Component {
  static propTypes = {
    children : React.PropTypes.element
  }

  render () {
    return (
      <div>
        <header>
          <a href="https://github.com/facebook/react" target="_blank">
            <Icon name="github" />
          </a>

          <a href="https://github.com/rodrigorm/github-issues-demo" target="_blank" className="btn primary fork">
            <Icon name="code-fork" /> Fork Me on GitHub
          </a>
        </header>

        {this.props.children}
      </div>
    );
  }
}
