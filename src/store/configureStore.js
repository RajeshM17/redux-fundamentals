import {configureStore} from '@reduxjs/toolkit';
import reducer from './projects'
// const store=createStore(Reducer,
//     devToolsEnhancer({trace:true})
// );
export default function (){
    return configureStore({reducer});
};