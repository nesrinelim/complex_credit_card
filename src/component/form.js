import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = { 
    }
    
    }
    handlechange=(event)=>{
        // this.setState({[event.target.name] : event.target.value
        // })
        if([event.target.name]=='card_num')
        {this.props.affich(event.target.value)}
        else if([event.target.name]=='name')
        {this.props.affname(event.target.value)}
        else
        {this.props.affdate(event.target.value)}
    }
   
    render() { 
        return ( <div className="form">
        <input type='text'name='card_num' onChange={this.handlechange} /><br/>
        <input type='text' name='name'onChange={this.handlechange}/><br />
        <input type='text'name='date' onChange={this.handlechange}/>
        </div> );
    }
}
 
export default Form;