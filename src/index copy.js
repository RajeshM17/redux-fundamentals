import * as actions from './store/bugs'
import configureStore from "./store/configureStore";
// store.state=1;

const store = configureStore();

store.subscribe(()=>{
    console.log("store changed")
});

store.dispatch(actions.bugAdded({description:"bug1"}));
store.dispatch(actions.bugAdded({description:"bug2"}));

store.dispatch(actions.bugAdded({description:"bug3"}));


store.dispatch(actions.bugResolved(1));
