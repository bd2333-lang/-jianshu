import {createStore,applyMiddleware,compose} from 'redux'
import reducer from "./reducer";
import {persistStore, persistReducer} from 'redux-persist'; //redux数据持久化
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import thunk from "redux-thunk";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(
    applyMiddleware(thunk)
);
const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2 // 查看 'Merge Process' 部分的具体情况
};

const myPersistReducer = persistReducer(persistConfig, reducer)
const store = createStore(myPersistReducer,enhancer)
export const persistor = persistStore(store)
// const store = createStore(reducer,enhancer);

export default store;