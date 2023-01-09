import { combineReducers } from 'redux'
import TODO from './AddReducer'
import deletedtodos from './TodoReducer'

const rootReducers = combineReducers({
    TODO,
   // deletedtodos

});
export default rootReducers;