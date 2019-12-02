import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';
import { Checkbox } from 'antd';
import objectAssign from 'object-assign';

const CLASS_NAME = 'react-ant-checkbox-group';
const DEFAULT_TEMPLATE = ({ item }) => {
  return (
    <Checkbox key={item.value} value={item.value}>
      {item.label}
    </Checkbox>
  );
};

export default class extends Component {
  static displayName = CLASS_NAME;
  static propTypes = {
    className: PropTypes.string,
    items: PropTypes.array,
    template: PropTypes.func,
    value: PropTypes.array,
    onChange: PropTypes.func
  };

  static defaultProps = {
    items: [],
    template: DEFAULT_TEMPLATE,
    value: [],
    onChange: noop
  };

  get childView() {
    const { items, template } = this.props;
    return items.map((item, index) => {
      return template({ item, index });
    });
  }

  onChange = (inEvent) => {
    const { onChange } = this.props;
    onChange({ target: { value: inEvent } });
  };

  render() {
    const {
      className,
      items,
      template,
      value,
      onChange,
      ...props
    } = this.props;
    return (
      <Checkbox.Group
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        onChange={this.onChange}
        {...props}>
        {this.childView}
      </Checkbox.Group>
    );
  }
}
