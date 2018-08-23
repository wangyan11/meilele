import {GET_CHANGE_ROOM} from "../actions/actionTypes";

const initState={
    list:{}
}

export default (state=initState,action)=>{
    switch(action.type){
        case GET_CHANGE_ROOM:
        return Object.assign({},state,{
            list:action.list
        })
        default:
       return state;
       }
}