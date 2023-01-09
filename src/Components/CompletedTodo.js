import React from 'react'
import { connect } from 'react-redux'
import { deleteTodo } from '../Action';
function CompletedTODO(props) {
    console.log(props);
    
    const completedList = props.lists.filter(item => item.status==='completed')
    console.log('Completed',completedList);
  return (
    <div>
        <h2>Completed TODOs</h2>
        <ul>
            {completedList.map(
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
export default  connect(mapData)(CompletedTODO)