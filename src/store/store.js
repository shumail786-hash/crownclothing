import {compose, applyMiddleware, createStore} from 'redux'
import logger from 'redux-logger'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { rootReducer } from './root-reducer'


const persistConfig = {
    key:"root",
    storage,
    blacklist:['user']
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
const middleWares = [process.env.NODE_ENV !== 'production' && logger].filter(Boolean)
const componseEnhancer = (process.env.NODE_ENV !== 'production' && 
    window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) 
    || compose;
const composeEnhancers  = componseEnhancer(applyMiddleware(...middleWares))
export const store = createStore(persistedReducer, undefined, composeEnhancers)
export const persistor = persistStore(store)
