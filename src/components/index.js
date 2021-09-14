import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@jswork/noop';
import { Checkbox } from 'antd';
import ReactList from '@Jswork/react-list';
import RctplAntCheckbox from '@jswork/rctpl-ant-checkbox';

const CLASS_NAME = 'react-ant-checkbox-group';

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
     * The handler when search.
     */
    onSearch: PropTypes.func,
    /**
     * The checkbox data source.
     */
    items: PropTypes.array,
    /**
     * The item template.
     */
    template: PropTypes.func.isRequired,
    /**
     * If no checkbox ui.
     */
    styleless: PropTypes.bool
  };

  static defaultProps = {
    items: [],
    onChange: noop,
    onSearch: noop,
    styleless: false,
    template: RctplAntCheckbox
  };

  onChange = (inEvent) => {
    const { onChange, onSearch } = this.props;
    const stdEvent = { target: { value: inEvent } };
    onChange(stdEvent);
    onSearch(stdEvent);
  };

  render() {
    const { className, items, template, onChange, onSearch, styleless, ...props } = this.props;
    return (
      <Checkbox.Group
        data-component={CLASS_NAME}
        data-styleless={styleless}
        className={classNames(CLASS_NAME, className)}
        onChange={this.onChange}
        {...props}>
        <ReactList items={items} template={template} />
      </Checkbox.Group>
    );
  }
}
