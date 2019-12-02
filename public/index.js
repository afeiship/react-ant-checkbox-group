import ReactAntCheckboxGroup from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import './assets/style.scss';

class App extends React.Component {
  state = {
    items: [
      { value: 'k1', label: 'label1' },
      { value: 'k2', label: 'label2' },
      { value: 'k3', label: 'label3' }
    ]
  };

  onChange = (inEvent) => {
    console.log('chk change:', inEvent.target.value);
  };

  render() {
    return (
      <div className="app-container">
        <ReactAntCheckboxGroup
          name="abc"
          onChange={this.onChange}
          items={this.state.items}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
