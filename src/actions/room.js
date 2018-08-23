 import { getRoomCenter } from '../api';
 import {GET_CHANGE_ROOM}from './actionTypes'

 const roomGetRoomCenter =(list) => {
     return{
         type:GET_CHANGE_ROOM,
         list
     }
    
 }
export const roomgetRoomCenter = ()=>{
    return dispatch=>{
        getRoomCenter().then(resp=>{
            
            dispatch(roomGetRoomCenter(resp.data.data))
        })

    }
}