import React,{PureComponent} from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import { Checkbox } from 'antd';

export default class extends PureComponent{
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    items: PropTypes.array,
    template: PropTypes.func
  };

  static defaultProps = {
    items: []
  };
  /*===properties end===*/

  constructor(props) {
    super(props);
    this.state = {};
  }

  render(){
    const { className, items, template,  ...props } = this.props;
    return (
      <Checkbox.Group {...props} className={classNames('react-ant-checkbox-group',className)}>
      {
        (items.length > 0) && items.map((item)=>{
          if( template ){
            return template( item, index );
          }
          return <Checkbox className="react-ant-checkbox-item" key={item.value} value={item.value}>{ item.label }</Checkbox>;
        })
      }
      </Checkbox.Group>
    );
  }
}
