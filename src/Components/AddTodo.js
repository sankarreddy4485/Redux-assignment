import React from 'react'
import { connect } from 'react-redux'
import {addTodo} from '../Action'
function AddTodo(props){
  return (
    <div>
        <h1>AddTodo</h1>
    <form onSubmit={(event)=>{
        event.preventDefault();
        
        props.dispatch(addTodo(event.target.name.value,event.target.desription.value,event.target.status.value));
            }}>
    <input type="text" name="name"/> <br/>
    <input type="text" name="desription"/> <br/>
    <select name='status' id=''>
        <option value='completed'>Completed</option>
        <option value='pending' defaultChecked>Pending</option>
    </select>

        <button>Submit</button>
    </form>
    
    </div>
  )
}



export default connect()(AddTodo)