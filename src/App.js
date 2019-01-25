import React, { Component } from 'react';
import Form from './component/form'
import './App.css';
import Card from './component/card'
class App extends Component {
constructor(props){
  super(props)
  this.state = {card_number:'0000000000000000' ,
                name:'name',
                date:'0000' 
              }
}
  aff=(value)=>{
   
   {this.setState({card_number:value})}
  
  }
  aff2=(value)=>{
    
   {this.setState({name:value})}
  
  }
  aff3=(value)=>{
    
    {this.setState({date:value})}
   
   }
  render() {
    return (
      <div className="App">
       <Card card_num={this.state.card_number} name={this.state.name} date={this.state.date}/>
       <Form affich={this.aff} affname={this.aff2} affdate={this.aff3} />
      </div>
    );
  }
}

export default App;
