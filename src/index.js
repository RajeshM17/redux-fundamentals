import store from "./customStore";
import * as actions from './actions'
// store.state=1;
store.subscribe(()=>{
    console.log("store changed")
});

store.dispatch(actions.bugAdded("bug1"));


