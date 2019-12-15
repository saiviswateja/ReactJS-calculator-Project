import React,{Component} from 'react'

class Calculator extends Component
{
  constructor(props)
  {
    super(props)
    this.state={
      eq:"",
      one:1,
      two:2,
      three:3,
      four:4,
      five:5,
      six:6,
      seven:7,
      eight:8,
      nine:9,
      zero:0
    }
  }
  onClickHandler()
  {
    this.setState({
      eq:this.state.eq+event.target.value

    })
  }
  evaluate()
  {
    
    var str=this.state.eq;
    var temp;
    var op;
    
    if(str.includes("+"))
    {
     temp=str.split("+");
     op=parseInt(temp[0])+parseInt(temp[1])
    }
    if(str.includes("-"))
    {
      temp=str.split("-")
      op=parseInt(temp[0])-parseInt(temp[1])
    }
    if(str.includes("*"))
    {
      temp=str.split("*")
      op=parseInt(temp[0])*parseInt(temp[1])
    }
    if(str.includes("/"))
    {
      temp=str.split("/")
      op=parseInt(temp[0])/parseInt(temp[1])
    }
    var s=op.toString()
    this.setState({
      eq:op.toString()
    })
    alert(this.state.eq)
  }
  render()
  {
    return (
      <div>
        <table border="1" wi>
        <tr>
          <td colspan="3"><input type="text" value={this.state.eq}readonly></input></td>
        </tr>
        <tr>
          <td><button class="myclass" type="button" onClick={this.onClickHandler.bind(this)}  value={this.state.one}>1</button></td>
          <td><button class="myclass" type="button" onClick={this.onClickHandler.bind(this)}  value={this.state.two}>2</button></td>
          <td><button class="myclass" type="button" onClick={this.onClickHandler.bind(this)}  value={this.state.three}>3</button></td>
        </tr>
        <tr>
          <td><button class="myclass" type="button">4</button></td>
          <td><button class="myclass" type="button">5</button></td>
          <td><button class="myclass" type="button">6</button></td>
        </tr>
        <tr>
          <td><button class="myclass" type="button">7</button></td>
          <td><button class="myclass" type="button">8</button></td>
          <td><button class="myclass" type="button">9</button></td>
        </tr>
        <tr>
        <td><button class="myclass" type="button" value="+" onClick={this.onClickHandler.bind(this)}>+</button></td>
        <td><button class="myclass" type="button" value="-" onClick={this.onClickHandler.bind(this)}>-</button></td>
        <td><button class="myclass" type="button" value="*" onClick={this.onClickHandler.bind(this)}>*</button></td>
        </tr>
        <tr>
          <td><button class="myclass" type="button" value="/" onClick={this.onClickHandler.bind(this)}>/</button></td>
          <td colspan="2"><button class="myclass" type="button" onClick={this.evaluate.bind(this)}>Evaluate</button></td>
        </tr>
      </table>
      </div>
    )
  }
}

export default Calculator;