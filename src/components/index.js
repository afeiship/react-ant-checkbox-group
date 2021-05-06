import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@jswork/noop';
import { Checkbox } from 'antd';

const CLASS_NAME = 'react-ant-checkbox-group';
const DEFAULT_TEMPLATE = ({ item }) => {
  return (
    <Checkbox key={item.value} value={item.value}>
      {item.label}
    </Checkbox>
  );
};

export default class ReactAntCheckboxGroup extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * Default value.
     */
    value: PropTypes.array,
    /**
     * The change handler.
     */
    onChange: PropTypes.func,
    /**
     * The checkbox data source.
     */
    items: PropTypes.array,
    /**
     * The item template.
     */
    template: PropTypes.func.isRequired
  };

  static defaultProps = {
    items: [],
    value: [],
    onChange: noop,
    template: DEFAULT_TEMPLATE
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
