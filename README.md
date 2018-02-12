# react-ant-checkbox-group
> React ant checkbox group.


## properties:
```javascript

  static propTypes = {
    className: PropTypes.string,
    items: PropTypes.array,
  };

  static defaultProps = {
    items: []
  };
  
```

## usage:
```jsx

// install: npm install afeiship/react-ant-checkbox-group --save
// import : import ReactAntCheckboxGroup from 'react-ant-checkbox-group'

class App extends React.Component{
  state = {
    items: nx.antBuildItems(['op1','op2','op3'],true)
  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  _onChange = e =>{
    console.log(e);
  };

  render(){
    return (
      <div className="hello-react-ant-checkbox-group">
        <ReactAntCheckboxGroup onChange={this._onChange} items={ this.state.items } ref='rc' />
      </div>
    );
  }
}

```

## customize style:
```scss
// customize your styles:
$react-ant-checkbox-group-options:(
);

@import '~node_modules/react-ant-checkbox-group/style.scss';
```
