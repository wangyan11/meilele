import {getMallListItem} from '../api';
import {GET_MALL_LIST} from './actionTypes';

export const getMallList = (list)=>{
  return {
    type:GET_MALL_LIST,
    list
  }
}

export const getMallListItems=(id=1)=>{
  return dispatch=>{
    getMallListItem(id).then(res=>{
      dispatch(getMallList(res.data))
    })
  }
}
