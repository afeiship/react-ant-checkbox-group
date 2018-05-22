import React,{PureComponent} from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import { Checkbox } from 'antd';
import 'next-return-event';

export default class extends PureComponent{
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    items: PropTypes.array,
    template: PropTypes.func
  };

  static defaultProps = {
    items: [],
    template: noop
  };
  /*===properties end===*/

  _onChange = inEvent =>{
    const { onChange } = this.props;
    onChange( nx.returnEventTarget( inEvent ) );
  };

  render(){
    const { className, items, template, onChange, ...props } = this.props;
    return (
      <Checkbox.Group onChange={this._onChange} className={classNames('react-ant-checkbox-group', className)}  {...props}>
      {
        (items.length > 0) && items.map((item, index)=>{
            return template(item, index) || (
              <Checkbox className="react-ant-checkbox-item" key={item.value} value={item.value}>{item.label}</Checkbox>
            );
        })
      }
      </Checkbox.Group>
    );
  }
}
