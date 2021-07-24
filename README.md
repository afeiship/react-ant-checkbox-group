# react-ant-checkbox-group
> React ant checkbox group.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-ant-checkbox-group
```

## properties
| Name      | Type   | Required | Default | Description                           |
| --------- | ------ | -------- | ------- | ------------------------------------- |
| className | string | false    | -       | The extended className for component. |
| value     | array  | false    | -       | Default value.                        |
| onChange  | func   | false    | noop    | The change handler.                   |
| items     | array  | false    | []      | The checkbox data source.             |
| template  | func   | false    | -       | The item template.                    |


## usage
1. import css
  ```scss
  @import "~@jswork/react-ant-checkbox-group/dist/style.css";

  // or use sass
  @import "~@jswork/react-ant-checkbox-group/dist/style.scss";

  // customize your styles:
  $react-ant-checkbox-group-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactAntCheckboxGroup from '@jswork/react-ant-checkbox-group';
  import { Checkbox } from 'antd';
  import './assets/style.scss';

  class App extends React.Component {
    state = {
      value: ['k1','k3'],
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
              <ReactAntCheckboxGroup
                name="abc"
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

  ```

## documentation
- https://afeiship.github.io/react-ant-checkbox-group/


## license
Code released under [the MIT license](https://github.com/afeiship/react-ant-checkbox-group/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-ant-checkbox-group
[version-url]: https://npmjs.org/package/@jswork/react-ant-checkbox-group

[license-image]: https://img.shields.io/npm/l/@jswork/react-ant-checkbox-group
[license-url]: https://github.com/afeiship/react-ant-checkbox-group/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-ant-checkbox-group
[size-url]: https://github.com/afeiship/react-ant-checkbox-group/blob/master/dist/react-ant-checkbox-group.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-ant-checkbox-group
[download-url]: https://www.npmjs.com/package/@jswork/react-ant-checkbox-group
