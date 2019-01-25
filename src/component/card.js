import React, { Component } from 'react';
import './card.css'
import logo1 from './img/smart_chip.jpg'
import logo2 from './img/master_logo.jpg'




class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {  }

    this.re12=/^(?=.{20,})/
  }
  
  test_card_num = number => {
    number = number.toString()
    
    let res = ''
    for(let i =0; i < 16; i += 4) {
      res += number.slice(i, i + 4) + ' '
    }
    return res
  }
   test_name=(name)=>{
     if(this.re12.test(name)===true) {return name.toUpperCase().slice(0,20)}
    {return name.toUpperCase()}

   }
   test_date=(date)=>{
     if(date!=='')
    { return date.slice(0,2) +'/'+ date.slice(2,4)}
  }

  render() { 
    const {card_num, name,date}=this.props
    return(<div className="container_block">
<div className='countainer'>
          <h1 className="title">CREDIT CARD</h1>
          <img src={logo1} className="App-logo" alt="logo"  width="15%" height="17%"/>
          <div className="global">
            <div className="s_global1">
                <label className="back">{this.test_card_num(card_num)}</label>
            <div className="box">
            <div className="cardholder">
              <label>0000 <br/> {this.test_name(name)}</label>
            </div>
            <div className="info-card">
            <div className="icoo">
            <p className="size">valid <br/> THRU</p>
            </div>
              <div className="bloc">
                <label className="size">MONTH/YEAR <br/> </label>
                <p className="num"><strong>  {this.test_date(date)}</strong></p>
              </div>
            </div>
            </div>
           </div>
           
           <img src={logo2} className="App-logo2" alt="logo"  width="17%" height="50%" />
           
          </div>
</div>

</div>)
  }
}
 
export default Card;






// const Card =({card_num})=>{



// }


// export default Card;
