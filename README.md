# react-ant-checkbox-group
> React ant checkbox group.

## installation
```shell
npm install -S @feizheng/react-ant-checkbox-group
```

## update
```shell
npm update @feizheng/react-ant-checkbox-group
```

## properties
| Name      | Type   | Required | Default | Description                           |
| --------- | ------ | -------- | ------- | ------------------------------------- |
| className | string | false    | -       | The extended className for component. |
| value     | array  | false    | []      | Default value.                        |
| onChange  | func   | false    | noop    | The change handler.                   |
| items     | array  | false    | []      | The checkbox data source.             |
| template  | func   | true     | -       | The item template.                    |


## usage
1. import css
  ```scss
  @import "~@feizheng/react-ant-checkbox-group/dist/style.scss";

  // customize your styles:
  $react-ant-checkbox-group-options: ()
  ```
2. import js
  ```js
  import ReactAntCheckboxGroup from '@feizheng/react-ant-checkbox-group';
  import ReactDOM from 'react-dom';
  import React from 'react';
  import { Checkbox } from 'antd';
  import './assets/style.scss';

  const DEFAULT_TEMPLATE = ({ item }) => {
    return (
      <Checkbox key={item.value} value={item.value}>
        {item.label}
      </Checkbox>
    );
  };

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
            template={DEFAULT_TEMPLATE}
          />
        </div>
      );
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));

  ```

## documentation
- https://afeiship.github.io/react-ant-checkbox-group/
