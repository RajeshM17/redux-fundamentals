import {createSlice} from '@reduxjs/toolkit';


let lastId=0;
const slice=createSlice({
    name:'bugs',
    initialState:[],
    reducers:{
        bugAdded:(bugs,action)=>{
            bugs.push({
                id: ++lastId,
                description:action.payload.description,
                resolved:false
            })
        },
        bugResolved:(bugs,action)=>{
            const index=bugs.findIndex(bug=>bug.id===action.payload.id)
            bugs[index].resolved=true;
        }
    }
})
export const {bugAdded,bugResolved} =slice.actions;
export default slice.reducer;
console.log(slice);












// import {createAction,createReducer} from '@reduxjs/toolkit';
// //Action Types
// //  const BUG_ADDED="bugAdded";
// //  const BUG_REMOVED="bugRemoved";
// //  const BUG_RESOLVED="bugResolved";

// //Action Creator
// export const bugResolved=createAction("bugResolved");
// export const bugAdded=createAction("bugAdded");
// export const bugRemoved=createAction("bugRemoved");

// // export const bugAdded=description=>({
// //     type:BUG_ADDED,
// //     payload: {
// //     description
// //     }   
// // });
// // export const bugResolved=id=>({

// // type:BUG_RESOLVED,
// // payload: {
// // id
// // }   
// // });
// // export const bugRemoved=id=>({

// // type:BUG_REMOVED,
// // payload: {
// // id
// // }   
// // });


// //Reducer

// let lastId=0;
// export default createReducer([],{
//     //key:value
//     //actions:functions
//     [bugAdded.type]:(bugs,action)=>{
//         bugs.push({
//             id: ++lastId,
//             description:action.payload.description,
//             resolved: false
//         })
//         },
//     [bugResolved.type]:(bugs,action)=>{
//         const index=bugs.findIndex(bug=>bug.id===action.payload.id)
//         bugs[index].resolved=true;
//     }

// });
// // export default function reducer(state=[],action) {
// //     switch (action.type) {
// //         case bugAdded.type:
// //             return [
// //                 ...state,
// //                 {
// //                     id:++lastId,
// //                     description:action.payload.description,
// //                     resolved:false,
// //                 }
// //             ];
// //         case bugRemoved.type:
// //             return state.filter(bug=>bug.id==action.payload.id)
        
// //         case bugResolved.type:
// //             return state.map(bug=>
// //                 bug.id!==action.payload.id?bug:{...bug,resolved:true})
        
// //         default:
// //             return state;
// //     }
    
// // }