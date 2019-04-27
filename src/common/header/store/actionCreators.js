import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';

const searchNavList = (data) => ({
  type: constants.SEARCH_NAV_LIST,
  data: fromJS(data),
  totalPage: Math.ceil( data.length / 10)
})

export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS
})
export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
})
export const getSearchNavList = () => {
  return (dispatch) => {
    axios.get('/api/searchNavList.json').then((res) => {
      dispatch(searchNavList(res.data.data))
    })
  }
}
export const mouseEnter = () => ({
  type: constants.MOUSE_ENTER
})
export const mouseLeave = () => ({
  type: constants.MOUSE_LEAVE
})
export const changePage = (page) => ({
  type: constants.CHANGE_PAGE,
  page: page
})