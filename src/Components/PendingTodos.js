import React from 'react'
import { connect } from 'react-redux'
import { deleteTodo } from '../Action';
function PendingTodos(props) {
    console.log(props);
    
    const pendingList = props.lists.filter(item => item.status==='pending')
    console.log('pending',pendingList);
  return (
    <div>
          <h2>Pending TODOs</h2>
        <ul>
            {pendingList.map(
                (list,index)=>
                    <li key={index}>{list.name}
                   </li>
                
            )}
        </ul>
    </div>
  )
}

const mapData = (state)=>({
 lists:state.TODO.data
})
export default  connect(mapData)(PendingTodos)