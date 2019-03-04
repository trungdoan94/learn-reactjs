import React, { Component } from 'react';
import './App.css';
import List from './List/List';


class App extends Component {
  state = {
    todoList: [],
    listValue: '',
  }

  inputHandler = (input) => {
    this.setState({
      listValue : input.target.value
    })
  }

  addHandler = (addTodo) => {
    if (addTodo === '' || addTodo == null) {
      alert('Can\'t be an empty todo')
    }else{
      let addNew = this.state.todoList;
      const tempNew = {
        status : null,
        value : addTodo
      }
      addNew.push(tempNew);
      this.setState({
        todoList: addNew
      })
      console.log(this.state.todoList);
    }
    this.setState({
      listValue: ""
    })
  }

  deleteHandler = (todo) => {
    let del = this.state.todoList;
    this.state.todoList.map((list,index) => {
      if (index === todo ){
        del.splice(index,1)
      }
    })
    this.setState({
      todoList: del
    })
    console.log(this.state.todoList)
  }
  
  statHandler = (stat,i) => {
    if (stat == null) {
      stat = {backgroundColor:'#eee'};
    }else stat = null;
    let tempList = this.state.todoList;
    tempList[i].status = stat;
    this.setState({
      todoList: tempList
    })
    console.log(stat)
  }


  render() {
    const inputStyle = {
      width: '100%',
      height: '40px'
    }

    let listRender = (
      <div>
        {this.state.todoList.map((list,index) => {
          return <List finishClick={() => this.statHandler(list.status,index)} styleUpdate={list.status} input={list.value} deleteClick={() => this.deleteHandler(index)}/>
        })}
      </div>
    );
    

    return (
      <div className="App">
          <table className='List'>
            <tbody>
              <tr>
                <td className='listShow'><input style={inputStyle} type='text' placeholder='Add to-do'  value={this.state.listValue} onChange={this.inputHandler}></input></td>
                <td className='btnAdd' onClick={() => this.addHandler(this.state.listValue)}><p>Add</p></td>
              </tr>
            </tbody>
          </table>
          {listRender}
      </div>
    );
  }
}

export default App;
