import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';

export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS
})
export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
})
export const searchNavList = (data) => ({
  type: constants.SEARCH_NAV_LIST,
  data: fromJS(data)
})
export const getSearchNavList = () => {
  return (dispatch) => {
    axios.get('/api/searchNavList.json').then((res) => {
      dispatch(searchNavList(res.data.data))
    })
  }
}