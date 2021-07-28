import {configureStore,getDefaultMiddleware} from '@reduxjs/toolkit';
import reducer from './reducer';
import logger from './middleware/logger'
// const store=createStore(Reducer,
//     devToolsEnhancer({trace:true})
// );
import toast from './middleware/toast'
export default function (){
    return configureStore({
        reducer,
        middleware:[
            ...getDefaultMiddleware(),
            logger({destination:"console"}),
        toast]
    });
};