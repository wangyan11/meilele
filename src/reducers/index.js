import { combineReducers } from 'redux'
import ui from './ui';
import Room from './Room';
import detail from './detail'
import navlist from './navlist'
const rootReducer = combineReducers({
    ui,
    navlist,
    detail,
    Room
})

export default rootReducer