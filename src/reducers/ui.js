import {
    UI_CHANGE_TITLE,
    UI_TOGGLE_FOOTER,
    UI_TOGGLE_HEADER,
    GET_MALL_LIST
} from '../actions/actionTypes'

const initState = {
    title: '首页',
    isToggleFooter: true,
    isToggleHeader:true,
    list:[]
    
}

export default (state = initState, action) => {
    switch (action.type){
        case UI_CHANGE_TITLE:
            let { title } = action;
            title = title ? title : state.title;           
            return Object.assign({}, state ,{
                title
            });
        case UI_TOGGLE_FOOTER:
            return Object.assign({}, state, {
                isToggleFooter: action.isFooterShow
            });
        case UI_TOGGLE_HEADER:
            return Object.assign({}, state, {
                isToggleHeader: action.isHeaderShow
            });
        case GET_MALL_LIST:
            return Object.assign({}, state, {
                list:action.list
            })
        default:
            return state;
    }
}
