import { connect } from 'react-redux'
import { deleteTodo } from '../Action';

function ListTodo(props) {
    console.log(props)
    return(
        <>
        <div>
           <h2> AllTODO LIst</h2>
        </div>
        <div className='displaytodos'>
        {props.lists.map(
                (list,index)=>
                    <li key={index}>{list.name}
                    <button onClick={()=>props.dispatch(deleteTodo(list.id))}>
                        Delete</button></li>
        )}


        </div>
        </>
    )
    
}
const mapData = (state)=>({
    lists:state.TODO.data
   })
   export default  connect(mapData)(ListTodo)