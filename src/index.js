// import * as actions from './store/bugs'
import {projectAdded} from './store/projects'
import configureStore from "./store/configureStore";
// store.state=1;

const store = configureStore();

store.subscribe(()=>{
    console.log("store changed")
});

store.dispatch(projectAdded({name:"project 1"}));

