import React, { Component } from "react";
import Statistics from './components/Statistics';

export default class Cll extends Component{
    state = {
      good: this.props.good,
      neutral: this.props.neutral,
      bad: this.props.bad,
      i: this.props.i
    }
  handleButton = e => {
    console.log(e.target.className);
    let ev = e.target.className; 
    this.setState(prevState =>{
        if(ev === 'good'){
          return ({
              good: prevState.good + 1,
              i: 1});
        }
        if(ev === 'neutral'){
            return {neutral: prevState.neutral + 1,
                i: 1};
        }
        if(ev === 'bad'){
            return {bad: prevState.bad + 1,
                i: 1};
        }
    });
  }
  total = () =>{
    let {good, neutral, bad} = this.state;
    let total = good + neutral + bad;
    return total;
  }
   
  positiveFeedback = () =>{
    let {good, neutral, bad} = this.state;
    let positive = (good / (good + neutral + bad)) * 100;
    return positive;
  }
  
render(){
     let {good, neutral, bad, i} = this.state;
    // console.log(good);
    let total = this.total();
    let positive = this.positiveFeedback();  
    return (
      <div>
        <p>Please leabe feedback</p>
        <ul>
          <button className="good" onClick={this.handleButton}>Good</button>
          <button className="neutral" onClick={this.handleButton}>Neutral</button>
          <button className="bad" onClick={this.handleButton}>Bad</button>
        </ul>
        <p>Statistics</p>
        {i===1 ?(
             <Statistics
             good = {good}
             neutral = {neutral}
             bad = {bad}
             total = {total}
             positive = {positive}
            />
        ):
            console.log('gg')
        }
      </div>
    );
  }
}