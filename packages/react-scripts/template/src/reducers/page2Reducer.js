import actions from '../actions'
import { REQUEST, SUCCESS, FAILURE } from '../actions/baseAction'

export default (state = {}, action) => {
  switch (action.type) {
    case actions.PAGE2_DATA_GET[REQUEST]: // page2加载数据请求
      return {
        ...state,
        page2Loading: true,
      }
    case actions.PAGE2_DATA_GET[SUCCESS]: // page2加载数据成功
      return {
        ...state,
        data: 'success',
        page2Loading: false,
      }
    case actions.PAGE2_DATA_GET[FAILURE]: // page2加载数据失败
      return {
        ...state,
        page2Loading: false,
      }
    default:
      return state
  }
}
