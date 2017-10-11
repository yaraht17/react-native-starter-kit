import { takeLatest, all } from 'redux-saga/effects';
// root saga reducer

export default [
  // like case return, this is take => call
  // inner function we use yield*
  // from direct watcher we just yield value
  function* fetchWatcher() {
    // use takeLatest instead of take every,
    // so double click in short time will not trigger more fork
    yield all([
      // takeLatest('app/getUserInfo', requestGetUserInfo)
    ]);
  }
];