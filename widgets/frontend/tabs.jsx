import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {selectedIndex: 0};
  }
  
  render() {
    // debugger;
    const x = this.props.tabs.map( (obj, idx) => { 
      return (<li key={`tab-${idx}`}>
                <h1>{ obj.title }</h1>
                <article>{ obj.content }</article>
              </li> )
    });
    
    
    return (
      <div className="tabs">
        <ul>
          {x}
        </ul>
      </div>
    );
  }
}

export default Tabs;