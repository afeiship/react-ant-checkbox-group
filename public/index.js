import ReactDemokit from '@jswork/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactAntCheckboxGroup from '../src/main';
import { Checkbox } from 'antd';
import './assets/style.scss';

class App extends React.Component {
  state = {
    value: ['v1'],
    items: [
      { value: 'k1', label: 'label1' },
      { value: 'k2', label: 'label2' },
      { value: 'k3', label: 'label3' }
    ]
  };

  onChange = (inEvent) => {
    // console.log('chk change:', inEvent.target.value);
    this.setState({ value: inEvent.target.value });
  };

  render() {
    return (
      <ReactDemokit
        className="p-3 app-container"
        url="https://github.com/afeiship/react-ant-checkbox-group">
        <article class="message is-info mb-3">
          <div class="message-header">Demo</div>
          <div class="message-body">
            <ReactAntCheckboxGroup
              name="abc"
              onChange={this.onChange}
              items={this.state.items}
            />
          </div>
        </article>

        <article class="message">
          <div class="message-header">Output</div>
          <div class="message-body">{JSON.stringify(this.state.value)}</div>
        </article>
      </ReactDemokit>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
