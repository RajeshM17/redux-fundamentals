import Reducer from './Reducer'
function createStore(Reducer) {
    let state;
    let listeners = [];
    function subscribe(listener) {
        listeners.push(listener);
    }
    function dispatch(action) {
        state = Reducer(state, action);
        for (let i = 0; i < listeners.length; i++) {
            listeners[i]();
        }
    }
    function getState() {
        return state;
    }
    return {
        getState,
        dispatch,
        subscribe
    };
}


export default createStore(Reducer);