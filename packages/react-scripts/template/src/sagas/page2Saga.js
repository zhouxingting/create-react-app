import { take, call, put } from 'redux-saga/effects'
import { push } from 'connected-react-router'

import actions from '../actions'

import { fetchPage2Data } from './reqSaga'

export function* watchPage2Load() {
  while (true) {
    yield take(actions.PAGE2_LOAD_HANDLE)

    // 同步调用接口实体
    yield call(fetchPage2Data)

    // 路由跳至'/page1'
    // yield put(push('/page1'))
  }
}
