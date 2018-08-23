import {
  UI_CHANGE_TITLE,
  UI_TOGGLE_FOOTER,
  UI_TOGGLE_HEADER,
} from './actionTypes'

export const gChangeTitle = (title) => {
  return {
    type: UI_CHANGE_TITLE,
    title
  }
}

export const gToggleFooter = (isFooterShow=true) => {
  return {
    type: UI_TOGGLE_FOOTER,
    isFooterShow
  }
}

export const gToggleHeader = (isHeaderShow=true) => {
  return {
    type: UI_TOGGLE_HEADER,
    isHeaderShow
  }
}