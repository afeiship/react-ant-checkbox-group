import ReactDemokit from '@jswork/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactAntCheckboxGroup from '../src/main';
import './assets/style.scss';

class App extends React.Component {
  state = {
    value: ['k1', 'k3'],
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
        <article className="message is-info mb-3">
          <div className="message-header">Demo</div>
          <div className="message-body">
            <div className="p-2">
              <ReactAntCheckboxGroup
                name="abc"
                value={this.state.value}
                onChange={this.onChange}
                onSearch={(e) => {
                  console.log('event:', e.target.value);
                }}
                items={this.state.items}
              />
            </div>

            <ReactAntCheckboxGroup
              name="abcd"
              styleless
              value={this.state.value}
              onChange={this.onChange}
              items={this.state.items}
            />
          </div>
        </article>

        <article className="message">
          <div className="message-header">Output</div>
          <div className="message-body">{JSON.stringify(this.state.value)}</div>
        </article>
      </ReactDemokit>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
