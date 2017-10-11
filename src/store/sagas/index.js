import { fork, all } from 'redux-saga/effects';
// import notification from './notification';

const rootSaga = function* () {
  yield all([
    // ...auth.map(watcher => fork(watcher)),
  ]);
};
export default rootSaga;