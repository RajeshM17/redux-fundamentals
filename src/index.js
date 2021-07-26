import store from './Store';
import * as bugActions from './actions'

// const unsubscribe=store.subscribe(()=>{
//     console.log("store changed!",store.getState());
// })

store.dispatch(bugActions.bugAdded("first bug"))
store.dispatch(bugActions.bugResolved(1));
// store.dispatch(bugActions.bugRemoved("1"));


// unsubscribe();
// store.dispatch({
//     type:"bugRemoved",
//     payload:1
// })

console.log(store.getState());